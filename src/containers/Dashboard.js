import React from 'react';
import { Link } from 'react-router';

const Dashboard = () => {
  return (
    <div id='dashboard'>
      <div className='col-sm-12'>
        <h3> Welcome to India Audi,</h3>
        <div className="content">
          <Link to="/sales-tracker"><img className="ing-responsive" alt="http://pictures.dealer.com/a/audiwichitaaoa/1017/bbe4cc854a959fc01127d2e9c68862c0x.jpg" src="http://pictures.dealer.com/a/audiwichitaaoa/1017/bbe4cc854a959fc01127d2e9c68862c0x.jpg" /></Link>
        </div>
      </div>
      <div className="component-container col-sm-12 clearfix">
        <section className="column-layout">

          <div className="column-content col-sm-6 three-column first">
            <div className="three-column-layout-parsys-0 parsys"><div className="section tout"><div className="tout_5416365921">
              <img className="ing-responsive" data-responsify="https://s7d9.scene7.com/is/image/Audiusastaging/2015-audi-r18-dna-defining-moments?wid={width}&amp;resMode=sharp2" alt="" className="responsive loaded" src="https://s7d9.scene7.com/is/image/Audiusastaging/2015-audi-r18-dna-defining-moments?wid=384&amp;resMode=sharp2" />
              <h5>Defining moments<span>First, ignore the rulebook.</span></h5>
              <p>For more than a hundred years, we've stared adversity in the face. When they said it can't be any lighter, we defied them. When they said it can't go faster, we proved them wrong. Whenever they said it couldn't be done, we simply did it. This is the undying spirit at our core.<br />
              </p>


            </div>
            </div>
            </div>
          </div>

          <div className="column-content col-sm-6 three-column two ">
            <div className="three-column-layout-parsys-1 parsys"><div className="section tout"><div className="tout_7318071931">
              <img data-responsify="https://s7d9.scene7.com/is/image/Audiusastaging/2016-Audi-Q5-MLP-ReadyTestDrive-001?wid={width}&amp;resMode=sharp2" alt="" className="responsive loaded" src="https://s7d9.scene7.com/is/image/Audiusastaging/2016-Audi-Q5-MLP-ReadyTestDrive-001?wid=384&amp;resMode=sharp2" /><h5>Audi quattro®<span>Four is superior to two.</span>
              </h5>
              <p>Thirty-five years ago, Audi quattro® became the first permanent all-wheel drive system designed for passenger vehicles — and it's been the front-runner ever since. Today quattro® plays an essential role in the Audi experience, ensuring its place as an engineering legend.</p>


            </div>
            </div>
            </div>
          </div>

        </section>
      </div>

    </div>
  );
};

export default Dashboard;
