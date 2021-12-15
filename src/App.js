import logo from './logo.svg';
import './App.css';
import './shopping.css';
import ShoppingCart from './Shoppingcart';

function App() {

  let priceList = [
    {
      plan : "BASIC",
      team : "For Team of 3-5 Members",
      price : 28,
      save :  20,
     yprice : 240,
      features : [
        {
          name : "Perfect of Small Team"
        },
        {
          name : "Unlimited Invoices"
        },
        {
          name : "Project Management"
        },
        {
          stylebutton : true
        },
     
      
      ]
    },
    {
      status : "Popular",
      plan : "INTERMEDIATE",
      team : "For Team of 5-10 Members",
      price : 39,
      save :  30,
    yprice : 400,
      features : [
        {
          name : "Perfect of Small Team"
        },
        {
          name : "Unlimited Invoices"
        },
        {
          name : "Project Management"
        },
        {
          name :"Team Management"
        },
        {
          enable : true
        },
      
      ]
    },
    {
      plan : "HIGH CLASS",
      team : "For Team of 10-25 Members",
      price : 58,
      save :  50,
      yprice : 600,
      features : [
        {
          name : "Perfect of Small Team"
        },
        {
          name : "Unlimited Invoices"
        },
        {
          name : "Project Management"
        },
        {
          name :"Team Management"
        },
        {
          name : "Time Tracking"
        },
       
   
      ]
    },
    {
      plan : "SUPREME",
      team : "For Team of 25-100 Members",
      price : 99,
      save :  80,
      yprice : 1000,
      features : [
        {
          name : "Perfect of Small Team"
        },
        {
          name : "Unlimited Invoices"
        },
        {
          name : "Project Management"
        },
        {
          name :"Team Management"
        },
        {
          name : "Time Tracking"
        },
      
      ]
    }
  ]
  return (
    <div className="App">
      <div class="pricing1 py-5 bg-light">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
        <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
        <div class="switcher-box mt-4 d-flex align-items-center justify-content-center">
          <span class="font-14 font-weight-medium">MONTHLY</span>
          <div class="onoffswitch position-relative mx-2">
            <input type="checkbox" name="onoffswitch1" class="onoffswitch-checkbox d-none" id="myonoffswitch1" />
            <label class="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
							<span class="onoffswitch-inner d-block"></span>
							<span class="onoffswitch-switch d-block bg-white position-absolute"></span>
						</label>
          </div>
          <span class="font-14 font-weight-medium">YEARLY</span>
        </div>
      </div>
    </div>
    </div>

    <div class="row mt-5">

      {
        priceList.map(obj => <ShoppingCart data = {obj}></ShoppingCart>)
      }
  
     
    
      
   </div>
    </div>
    </div>
  );
}

export default App;
