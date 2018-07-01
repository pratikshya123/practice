let restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
  };



  let{name:n,seatingCapacity:sc,hasDineInSpecial:hsd,entrees:en}=restaurant;
  console.log(`welcome to ${n}`);