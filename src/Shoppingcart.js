export default function ShoppingCart(props){
    return  <div class="col-lg-3 col-md-6">
    <div class="card text-center card-shadow on-hover border-0 mb-4">
      <div class="card-body font-14">
      <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">{props.data.status}</span>
        <h5 class="mt-3 mb-1 font-weight-medium">{props.data.plan}</h5>
        <h6 class="subtitle font-weight-normal">{props.data.team}</h6>
        <div class="pricing my-3">
          <sup>$</sup>
          <span class="monthly display-5">{props.data.price}</span>
          <span class="yearly display-5">{props.data.yprice}</span>
          <small class="monthly">/mo</small>
          <small class="yearly">/yr</small>
          <span class="d-block">Save <span class="font-weight-medium">${props.data.save}</span> a Year</span>
        </div>
        <ul class="list-inline">

            {
                props.data.features.map(obj => {
                return  <li class="d-block py-2">{obj.name}</li> 
                })
            }
      
         {/* <li class="d-block py-2">Perfect of Small Team</li>
          <li class="d-block py-2">Unlimited Invoices</li>
          <li class="d-block py-2">Project Management</li>
          <li class="d-block py-2">&nbsp;</li>
        <li class="d-block py-2">&nbsp;</li>
          
             <a class="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>*/}
        </ul>
        <div class="bottom-btn">
       {/* <a class="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>*/}
            {props.data.features.enable ?
                     <a class="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
                  :
                       <a class="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
                  }
                
                   
                 
               
              
                
          
      
        </div>
      </div>
    </div>
  </div>
}
