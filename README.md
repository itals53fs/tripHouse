# TripHouse
    #Camila de Souza Ferreira
	#Érica Cristiana dos Santos
	#Marleison da Silva Rodrigues
	#Tales Félix Gonçalves Cruz
	#Ulisses Xavier Brandão
    
### Frontend
Para inicializar o Frontend da aplicação é necessariio ter o nodeJS e npm installados global<br>
Para instalar, siga o tutorial a seguir: https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos <br>

Após ter o Node instalado clone nosso diretorio, para ter o código na sua maquina <br>
```
git clone https://github.com/itals53fs/tripHouse.git
```

Agora, precisamos instalar as dependências do projeto frontend, execute o seguinte comando no diretorio frontend <br>
tripHouse/frontend <br>
```
npm i
```
Depois execute o seguinte comando para dar start na aplicação frontend <br>
```
npm start
```

*Observação, para executar o Frontend como HTTPS, precisamos do seguinte comando: <br>
Para Windows(Powershell). <br>
```
($env:HTTPS = "true") -and (npm start)
```
Para Linux/macOS (bash). <br>
```
HTTPS=true npm start
```

### Backend
Para o backend precisamos também instalar as dependências <br>
tripHouse/server <br>
```
npm i
```
Depois execute o seguinte comando para dar start na aplicação frontend <br>
```
npm start
```
### Gerando cerificados opnssl
no diretorio server <br>
tripHouse/server/certificates <br>

Gerando a Chave
```
openssl genrsa -out key.pem
```
Gerando o Cetificado
```
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 200 -in csr.pem -signkey key.pem -out cert.pem
```
