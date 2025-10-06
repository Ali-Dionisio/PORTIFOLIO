import cron from "node-cron";
import moment from "moment";
import sendEmail from "./email.service.js";
import pedidoRepositories from "../repositories/pedido.repositories.js";

//  minuto - hora - dia - mes - dia da semana
cron.schedule("06 * * * *", async () => {
    console.log("Running daily job to check for due date...");
    
    try {
        const pedidos = await pedidoRepositories.findAllPedidosRepository();
        const today = moment().startOf("day")

        pedidos.forEach( async (pedido) => {
            const dueDate = moment(pedido.dueDate).startOf("day");
            const reminderDueDate = moment(dueDate).subtract(1, "days");
            if(today.isSame(reminderDueDate)){
                sendEmail(pedido.email, pedido.nome_produto, pedido.data_pedido);
            }
        });
    } catch (error) {
        console.error("Erro ao executar job de verificação", error.message);
    }
});