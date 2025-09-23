--Baixar imagem com o banco no DOCKER
https://hub.docker.com/repository/docker/nozillaa/mongo-grupo-oscar/general
docker push nozillaa/mongo-grupo-oscar:tagname

--Instalação das bibliotecas
No terminal, dentro do seu .venv, rode:
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

--Iniciar serviço
python app.py