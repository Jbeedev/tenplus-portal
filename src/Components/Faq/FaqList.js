import { useState } from 'react';

const FaqList = ({id, title, body, body2}) => {
    
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
           
                                <div class="card my-5" id={id}>
                                    <div class="card-header bg-success" id="headingOne"  data-toggle="collapse" data-target="#collapseOne">
                                        <h5 class="mb-0">
                                            <button onClick={ () => setIsActive(!isActive) } class="btn btn-link text-white collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                {title}
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collaps" aria-labelledby="headingOne" data-parent="#accordion">
                                        {isActive && <div class="card-body">
                                            {body} <br /> <br /> {body2}
                                        </div> }
                                    </div>
                                </div>
        </div>
    );
}
 
export default FaqList;