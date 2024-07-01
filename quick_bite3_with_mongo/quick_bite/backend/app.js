console.log("hyy");


const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const port = 3000;

// קישור לבסיס הנתונים MongoDB
mongoose.connect('mongodb://localhost/Quick_bite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



// הגדרת סכמה למסמכי המשתמשים
const userSchema = new mongoose.Schema({

    username: String,
    firstName: String,
    lastName: String,
    address: String,
    phone: String,
    password: String,
    orders: Array
});

// יצירת מודל המשתמשים
const User = mongoose.model('User', userSchema);

// הגדרת מידלוור לפרסור של נתוני JSON
app.use(express.json());
app.use(cors());


async function getUsers() {
const users = await User.find({});
console.log('All users:', users);
}

getUsers();
// doctorsApp()

// נתיב להתחברות של משתמש
app.post('/api/check-username', async (req, res) => {
  console.log(req.body)
  const  password  = req.body.password;
  const username = req.body.username.toLowerCase();
  console.log(username);
  console.log(password);

  try {
    // חיפוש משתמש וסיסמא בבסיס הנתונים
    const user = await User.findOne({ username: username.toLowerCase() });
    
    console.log(user);
    if (!user) {
      console.log(`user ${username} not found`);
      // המשתמש לא קיים בבסיס הנתונים, אי אפשר להתחבר
      res.status(401).send(JSON.stringify({exists: false , correctPassword: false}));
    }
     // הסיסמא אינה נכונה, אי אפשר להתחבר
    else if(user.password !== password) {
      console.log(user.password);

      res.status(401).send(JSON.stringify({exists: true, correctPassword: false}));
    }

    // הסיסמא נכונה, הלקוח מקבל אישור על כך ואת כל פרטי הלקוח ופגישותיו
    else{
console.log("נוצר חיבור חדשד");
      res.status(200).send(JSON.stringify({exists: true, correctPassword: true, useerObj: user}));
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('שגיאה בשרת');
  }
});




    
// הגדרת סכמה למסעדות

const restaurantSchema = new mongoose.Schema({


    name: String,
    image: String,
    category: String,
    address: String,
    distance: Number,  
    dishes: Array

});


// יצירת מודל מסעדות
const Restaurants = mongoose.model('Restaurant', restaurantSchema);



async function getRestaurants() {
const restaurants = await Restaurants.find({});
console.log('All restaurants:', restaurants);
}

getRestaurants();


app.get('/api/restaurants', async (req, res) => {
    try {
      const restaurants = await Restaurants.find({});
      res.send(restaurants);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });



  // נתיב להוספת הזמנה למשתמש
app.post('/api/add-order', async (req, res) => {
  console.log(req.body);
  const { userId, restaurantId, dishesObj } = req.body;

  try {
    // מציאת המשתמש לפי ה-ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // מציאת המסעדה לפי ה-ID
    // const restaurant = await Restaurants.findById(restaurantId);
    // if (!restaurant) {
    //   return res.status(404).send('Restaurant not found');
    // }

    // מציאת המנה בתוך המסעדה
    // const dish = restaurant.dishes.id(dishId);
    // if (!dish) {
    //   return res.status(404).send('Dish not found in the restaurant');
    // }

    // הוספת ההזמנה לרשימת ההזמנות של המשתמש
    user.orders.push(dishesObj);
    console.log(dishesObj);
    // שמירת השינויים במשתמש
    await user.save();
    console.log("successfully added order");
 

    res.status(200).send('Order added successfully');
  } catch (error) {
    console.error('Error adding order:', error);
    res.status(500).send('Server error');
  }
});


// הפעלת השרת
app.listen(port, () => {
    console.log(`server listening happy at port ${port}`);
  });



