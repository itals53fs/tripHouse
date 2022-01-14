# TripHouse
### Frontend
É necessariio ter o nodeJS e npm installados global<br>
no diretorio frontend <br>
tripHouse/frontend <br>
```
npm i
```
### Backend
no diretorio server <br>
tripHouse/server <br>
```
npm i
```

### Gerando cerificados opnssl
no diretorio server <br>
tripHouse/server <br>

Gerando a Chave
```
openssl genrsa -out key.pem
```
Gerando o Cetificado
```
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 200 -in csr.pem -signkey key.pem -out cert.pem
```
