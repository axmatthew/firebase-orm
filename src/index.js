import firebase from 'firebase';

export default (() => (
  {
    connect: (databaseURL, serviceAccount) => {
      firebase.initializeApp({ databaseURL, serviceAccount });
    },

    fetch: (url, valueCallback) => (
      firebase.database().ref(url).on('value', snapshot => valueCallback(snapshot.val()))
    )
  }
))();
