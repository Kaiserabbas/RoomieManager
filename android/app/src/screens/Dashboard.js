// Inside Dashboard.js
useEffect(() => {
  const subscriber = db.collection('expenses')
    .onSnapshot(querySnapshot => {
      let total = 0;
      querySnapshot.forEach(documentSnapshot => {
        total += documentSnapshot.data().amount;
      });
      setRoomTotal(total);
      setMyBalance(total / 10); // Simple split for 10 persons
    });

  return () => subscriber();
}, []);