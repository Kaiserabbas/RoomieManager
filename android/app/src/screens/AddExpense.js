import { db } from '../firebase/config';

const submitExpense = async (amount, desc, userId, userName) => {
  try {
    await db.collection('expenses').add({
      description: desc,
      amount: parseFloat(amount),
      addedBy: userId,
      addedByName: userName,
      date: new Date().toISOString(),
      // We store month/year to filter records later
      monthYear: "April-2026", 
    });
    alert("Expense Logged!");
  } catch (error) {
    console.error("Error adding expense: ", error);
  }
};