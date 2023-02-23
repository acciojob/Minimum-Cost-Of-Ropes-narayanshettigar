// function calculateMinCost() {
//   //your code here
  
  
  
// }  
// Taking input from user and converting it to array
const arr = document.querySelector('input[type="text"]').value.split(',').map(Number);

// Function to calculate minimum cost of ropes
function calculateMinCost(arr) {
  // Creating a priority queue
  const pq = new PriorityQueue();

  // Adding all the ropes to the priority queue
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i]);
  }

  let cost = 0;

  // Connecting the ropes until there is only one rope left in the queue
  while (pq.size() > 1) {
    // Taking the two smallest ropes from the queue
    const min1 = pq.dequeue();
    const min2 = pq.dequeue();

    // Connecting the ropes and adding the cost
    const sum = min1 + min2;
    cost += sum;

    // Adding the connected rope to the queue
    pq.enqueue(sum);
  }

  // Returning the minimum cost
  return cost;
}

// Defining a priority queue class
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Function to add an item to the queue
  enqueue(item) {
    let added = false;

    // Adding the item to the appropriate position in the queue
    for (let i = 0; i < this.items.length; i++) {
      if (item < this.items[i]) {
        this.items.splice(i, 0, item);
        added = true;
        break;
      }
    }

    // If the item is the largest so far, add it to the end
    if (!added) {
      this.items.push(item);
    }
  }

  // Function to remove and return the smallest item from the queue
  dequeue() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Function to return the size of the queue
  size() {
    return this.items.length;
  }
}

// Getting the minimum cost of the ropes and displaying it
const resultDiv = document.querySelector('#result');
resultDiv.innerText = minCost(arr);

