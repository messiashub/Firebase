
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

let dataBase = firebase.firestore();
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

 let docReferencia = dataBase.collection('turmaA').doc('JfHdIRpWVfqlo5vER9ov');
 docReferencia.get().then((doc)=>{
   /* let aluno = doc.data(); */
   console.log(doc.data().nome);
   console.log(doc.data().notas)
   console.log(doc.data().advertências);
 })

