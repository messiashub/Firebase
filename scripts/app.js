
 var firebaseConfig = {
    apiKey: "AIzaSyDqf9JcLKy_pXsdAAQRunIGfNYUAumhiHI",
    authDomain: "colegio-2dc3b.firebaseapp.com",
    databaseURL: "https://colegio-2dc3b-default-rtdb.firebaseio.com",
    projectId: "colegio-2dc3b",
    storageBucket: "colegio-2dc3b.appspot.com",
    messagingSenderId: "992636655982",
    appId: "1:992636655982:web:1e58d1b61edb82a466897f",
    measurementId: "G-SYT8NS5ZJN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  // LENDO OS DOCUMENTOS DA COLEÇÃO

//let dataBase = firebase.firestore();
// lendo todos os dados da coleção
/* dataBase.collection("turmaA").get()
          .then((snapshot)=>{

            snapshot.forEach((doc)=>{
              let aluno = doc.data();
              console.log(doc.id);
              console.log(doc.data());
              console.log(aluno.nome)
            })

 }) */

/*let docReferencia = dataBase.collection('turmaA').doc('JfHdIRpWVfqlo5vER9ov'); // id
 docReferencia.get().then((doc)=>{
   /* let aluno = doc.data(); */
 //  console.log(doc.data().nome);
 //  console.log(doc.data().notas)
 //  console.log(doc.data().advertências);
 /*})*/ // */
 
// BUSCAS - SELECIONANDO  MELHOR OS DOCUMENTOS

/* dataBase.collection('turmaA').where('nome','>=','Claudinei').get() // .where = onde ,  .get = pegue
          .then(snapshot =>{                                       // .then = então
            snapshot.forEach((doc)=>{
              let aluno = doc.data();
              console.log(aluno.nome,aluno.sobrenome,aluno.notas);
            })
          })

 */


// CRIANDO E  ALTERANDO DOCUMENTOS


const TURMA = 'turmaA';

/* criando um objeto novo*/
let dataBase = firebase.firestore();
dataBase.collection(TURMA).add({   // .add = adicionando um objeto
  nome:'Marcos',
  sobrenome: 'Da Silva Sauro',
  notas:{nota1: 5, nota2: 7.5}
}).then((doc)=>{
  console.log( doc);
}).catch(err => console.log(err));

/* definindo um id */
dataBase.collection(TURMA).doc('Aluno Novo').set(
  {nome:'Conan',sobrenome:'da Ciméria',notas:{nota1:3, nota2:5}}
).then(()=>{
  console.log('Id definido com sucesso!');
}).catch(err=> console.log('Deu merda'))


/*alterando documento*/
dataBase.collection(TURMA).doc('eclydPyc0e1Z1L6FwQAC').set(  // .set = sobrescreve ou altera
  { nome:'Igor', sobrenome:'Ferreira',notas:{nota1:6.6, nota2 :5}}
  ).then(()=> {
    console.log('Documento inserido com sucesso!');
  }).catch(err => {
    console.log(err)
  });

/* Dica 1 caso queira mudar só algum item , use  merge */ 
dataBase.collection(TURMA).doc('MfUiy10hgCGhc1a8UIYR').set(  // .set = sobrescreve ou altera
  {advertências:{data:'1 de Dezembro', descrição: 'repetiu de ano'}}, {merge:true} // mesclar
  ).then(()=> {
    console.log('Documento inserido com sucesso!');
  }).catch(err => {
    console.log(err)
  });
/* Dica 2  use update para atualizar os dados*/
dataBase.collection(TURMA).doc('OoGVnSL8JQvHFhfJhoI9').update(
  {notas:{nota1:3,nota2:9.6}}
).then(()=>{
  console.log('Documento atualizado com sucesso!')
}).catch(err=>{
  console.log(err)
})

/*inserindo e  atualizando array*/
/* inserindo */
dataBase.collection(TURMA).doc('qCmvCRUq4lLlQWBMYLHi').update(
  {
    cidades:['Bahia','Minas Gerais']
  }

).then(()=> console.log('Documento atualizado com sucesso!'))
.catch(err=> console.log(err));

/*atualizando o array*/

dataBase.collection(TURMA).doc('qCmvCRUq4lLlQWBMYLHi').update(
  {
    cidades:firebase.firestore.FieldValue.arrayUnion('Vitoria','Rio de janeiro')
  }
).then(()=> console.log('Documento atualizado com sucesso!'))
.catch(err=> console.log(err));

/* removendo*/

dataBase.collection(TURMA).doc('qCmvCRUq4lLlQWBMYLHi').update(
  {
    cidades:firebase.firestore.FieldValue.arrayRemove('Rio de janeiro')
  }
).then(()=> console.log('Documento atualizado com sucesso!'))
.catch(err=> console.log(err));

// APAGANDO CAMPOS E DOCUMENTOS

/* apagando campos */
dataBase.collection(TURMA).doc('078t8RlFlenpDYIL0ds5').update(
  {
    notas :firebase.firestore.FieldValue.delete()
  }
).then(()=> console.log('Campo deletado com sucesso'))
.catch(err=> console.log(err));

/* apagando o documento inteiro */
dataBase.collection(TURMA).doc('voglkwqs9cqlKGk6tbwM').delete()
.then(()=> console.log('Documento Apagado!'))
.catch(err => console.log(err));