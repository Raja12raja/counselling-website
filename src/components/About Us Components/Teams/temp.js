import React from 'react'

export default function Counsellors() {
  return (
            <section className="section">
              <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="nav-wrapper" style={{padding: 0}}>
                        <ul className="nav nav-pills nav-fill flex-row flex-md-column" id="tabs-text" role="tablist">
                          <li className="nav-item" style={{padding: '.3rem'}}>
                            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-1-tab" data-toggle="tab" href="#tabs-text-1" role="tab" aria-controls="tabs-text-1" aria-selected="false">Head, CS</a>
                          </li>
                          <li className="nav-item" style={{padding: '.3rem'}}>
                            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-tab" data-toggle="tab" href="#tabs-text-2" role="tab" aria-controls="tabs-text-2" aria-selected="false">Counsellors</a>
                          </li>
                          <li className="nav-item" style={{padding: '.3rem'}}>
                            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-toggle="tab" href="#tabs-text-3" role="tab" aria-controls="tabs-text-3" aria-selected="false">Visiting Psychiatrists</a>
                          </li>
                          <li className="nav-item" style={{padding: '.3rem'}}>
                            <a className="nav-link mb-sm-3 mb-md-0 active show" id="tabs-text-4-tab" data-toggle="tab" href="#tabs-text-4" role="tab" aria-controls="tabs-text-4" aria-selected="true">UG Team</a>
                          </li>
                          <li className="nav-item" style={{padding: '.3rem'}}>
                            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-5-tab" data-toggle="tab" href="#tabs-text-5" role="tab" aria-controls="tabs-text-5" aria-selected="false">PG Team</a>
                          </li>
                          <li className="nav-item" style={{padding: '.3rem'}}>
                            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-6-tab" data-toggle="tab" href="#tabs-text-6" role="tab" aria-controls="tabs-text-6" aria-selected="false">Office Staff</a>
                          </li>
                          <li className="nav-item" style={{padding: '.3rem'}}>
                            <a className="nav-link mb-sm-3 mb-md-0" href="./prevteam.php" role="tab" aria-selected="false">Previous Teams</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card shadow">
                        <div className="card-body">
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
                              <div style={{width: '100%', textAlign: 'center'}}>
                                <div className="px-4">
                                  <img src="./assets/img/team/Santanusir_Head.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '150px'}} /> 
                                  <div className="pt-4 text-center">
                                    <h5 className="title">
                                      <span className="d-block mb-1">Prof. Santanu Misra</span>
                                      <small className="h6 text-muted"><b>Email :</b> head_cs@iitk.ac.in; smisra@iitk.ac.in</small><br />
                                      <small className="h6 text-muted"><b>Mobile :</b>+91-7080104780 </small><br />
                                      <small className="h6 text-muted"><b>Phone (Office) :</b> 0512-259-7549</small><br />
                                      <small className="h6 text-muted"><b>Address (Office) :</b>201, Old SAC Building, IIT Kanpur</small><br />
                                      <small className="h6 text-muted">For JEE related queries, contact JEE office, Phone: 0512-259-7335</small>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-tab">
                              <div className="row" style={{paddingBottom: '15px'}}>
                                <div className="col-md-6">
                                  <div className="px-4">
                                    <img src="./assets/img/team/counsellors/rita2.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '50%'}} />
                                    <div className="text-center" style={{fontSize: 'small'}}>
                                      <b>Rita Shukla</b><br />Counsellor<br />rita@iitk.ac.in<br />+91 512 2597165
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="px-4">
                                    <img src="./assets/img/team/counsellors/shreyasi.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '50%'}} />
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Shreyasi Vashishtha</b><br />Counsellor<br />shreyasiv@iitk.ac.in<br />+91 512 2594733
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="px-4">
                                    <img src="./assets/img/team/counsellors/akanksha.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '50%'}} />
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Akanksha Awasthy</b><br />Counsellor<br />awasthya@iitk.ac.in<br />+91 512 2594734
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="px-4">
                                    <img src="./assets/img/team/counsellors/ansuma.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '50%'}} />
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Ansuma Narzary</b><br />Counsellor<br />ansuma@iitk.ac.in<br />+91 512 2597910
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="px-4">
                                    <img src="./assets/img/team/counsellors/amandip.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '50%'}} />
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Amandip Saikia </b><br />Counsellor<br />amandips@iitk.ac.in<br />+91 512 2597957
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="px-4">
                                    <img src="./assets/img/team/counsellors/oyin.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '50%'}} />
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Oyin Mibang </b><br />Counsellor<br />oyin@iitk.ac.in
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row" style={{paddingBottom: '15px'}}>
                                <div className="col-md-12">
                                  <div className="px-4">
                                    <br /><br /><br />
                                    <div className=" text-center" style={{fontSize: 'medium'}}>
                                      <b>Common Email Address</b><br />counselor@iitk.ac.in
                                      <br /><b>Common Telephone number</b><br />+91 5122597784
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs-text-3" role="tabpanel" aria-labelledby="tabs-text-3-tab">
                              <table>
                                <tbody><tr>
                                    <td>
                                      <p>
                                        The Institute has two psychiatrists who visit the campus on a regular basis. Students are
                                        informed about psychiatrist visits in advance through email. The visits are kept at
                                        regular intervals throughout the semester.
                                      </p>
                                      <h5>Dr. Sanjay Mahendru</h5>
                                      <p>
                                        Dr. Sanjay Mahendru is a graduate from G.S.V.M. Medical College, Kanpur. He has done his
                                        MD Psychiatry from K.G. Medical College, Lucknow. Currently, besides being actively
                                        involved in practice, he is also conducting quality research in the form of clinical drug
                                        trials.
                                        <br /><br />
                                        Email:sanjay.mahendru@yahoo.co.in<br />
                                      </p>
                                      <h5>Dr Rohan Kumar</h5>
                                      <p>
                                        Dr. Rohan Kumar has done his Diploma in Psychological Medicine from D.Y. Patil University. He is currently a consultant at Regency Hospital. He currently consults at the De-addiction Clinic along with a counselor at IIT Kanpur.
                                        <br /><br />
                                        Email:rohankumar317@gmail.com<br />
                                      </p>
                                    </td>
                                  </tr>
                                </tbody></table>
                            </div>
                            <div className="tab-pane fade show active" id="tabs-text-4" role="tabpanel" aria-labelledby="tabs-text-5-tab">
                              <div className="nav-wrapper" style={{paddingTop: 0}}>
                                <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="itabs-text" role="tablist">
                                  <li className="nav-item">
                                    <a className="nav-link mb-sm-3 mb-md-0 active show" id="tabs-text-1-itab" data-toggle="tab" style={{height: '30px', paddingTop: '5px', fontSize: 'smaller'}} href="#itabs-text-1" role="tab" aria-controls="itabs-text-1" aria-selected="true">Coordinators</a>
                                  </li>  
                                  <li className="nav-item">
                                    <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-itab" data-toggle="tab" style={{height: '30px', paddingTop: '5px', fontSize: 'smaller'}} href="#itabs-text-2" role="tab" aria-controls="itabs-text-2" aria-selected="false">Core Team</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-itab" data-toggle="tab" style={{height: '30px', paddingTop: '5px', fontSize: 'smaller'}} href="#itabs-text-3" role="tab" aria-controls="itabs-text-3" aria-selected="false">Student Guide</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-4-itab" data-toggle="tab" style={{height: '30px', paddingTop: '5px', fontSize: 'smaller'}} href="#itabs-text-4" role="tab" aria-controls="itabs-text-4" aria-selected="false">Academic Mentors</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-10-itab" data-toggle="tab" style={{height: '30px', paddingTop: '5px', fontSize: 'smaller'}} href="#itabs-text-10" role="tab" aria-controls="itabs-text-10" aria-selected="false">Creatives</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade active show" id="itabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-itab">
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/shivam.goel.5494360"><img src="./assets/img/team/UGY19/Shivamg.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} /></a>
                                        <div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Shivam Goel</b>
                                          <br />shivamg@iitk.ac.in<br />7355291522
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/nandini.shahi.1428"><img src="./assets/img/team/UGY19/Nandinis.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} /></a>
                                        <div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Nandini Shahi</b>
                                          <br />nandinis@iitk.ac.in
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/chaaruusaranya"><img src="./assets/img/team/UGY19/Saranyas.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} /></a>
                                        <div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Saranya Satheesh</b>
                                          <br />saranyas@iitk.ac.in
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/krishna.agrawal.1884"><img src="./assets/img/team/UGY19/Krishnaa.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} /></a>
                                        <div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Krishna Agrawal</b><br />krishnaa@iitk.ac.in<br />
                                          9987874242
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/namratesh.shukla"><img src="./assets/img/team/UGY19/Namrateshs.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} /></a>
                                        <div className=" text-center" style={{fontSize: 'small'}}>
                                          <b>Namratesh Shukla</b><br />nshukla@iitk.ac.in<br />
                                          8806992479
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="tab-pane fade" id="itabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-itab">
                                  <h5>Operations :</h5>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/anshul.jain.92754397"><img src="./assets/img/team/UGY20/Anshul.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Anshul Jain</b>
                                          <br />anshulj20@iitk.ac.in
                                          <br />7290021000
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/aryaman.badkul/"><img src="./assets/img/team/UGY20/Aryaman.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Aryaman Badkul</b>
                                          <br />aryamanb20@iitk.ac.in
                                          <br />8982806314
                                        </div>
                                      </div>
                                    </div>   
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/ashhish.15"><img src="./assets/img/team/UGY20/Ashish.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} /></a>
                                        <div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Ashish Yadav</b>
                                          <br />ashisy20@iitk.ac.in
                                          <br />8471003091
                                        </div> 
                                      </div>
                                    </div> 
                                  </div>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/deepanshi.maheshwari.10"><img src="./assets/img/team/UGY20/Deepanshi.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className=" text-center" style={{fontSize: 'small'}}>
                                          <b>Deepanshi Maheshwari </b><br />mdeepanshi20@iitk.ac.in<br />6398933070
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/GIRIK.MASKARA/"><img src="./assets/img/team/UGY20/Girik.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Girik Maskara</b>
                                          <br />girikm20@iitk.ac.in
                                          <br />9830589499
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/profile.php?id=100057191434018"><img src="./assets/img/team/UGY20/Nivin.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Nivin Vinod</b>
                                          <br />nivin20@iitk.ac.in<br />7012884206 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/prasang.gupta.7374"><img src="./assets/img/team/UGY20/Prasang3.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className=" text-center" style={{fontSize: 'small'}}>
                                          <b>Prasang Gupta</b><br />prasangg20@iitk.ac.in
                                          <br />9560841592
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/satyansha.dev.77"><img src="./assets/img/team/UGY20/Satyansha.png" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Satyansha Dev</b>
                                          <br />satyanshad20@iitk.ac.in
                                          <br />7428707395
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/vedant.bang.144"><img src="./assets/img/team/UGY20/Vedant_Bang.png" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Vedant Bang</b>
                                          <br />vedantb20@iitk.ac.in
                                          <br />8554892472 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/vedant.gitte.5/"><img src="./assets/img/team/UGY20/vedant2.jpeg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Vedant Gitte</b>
                                          <br />vedantsg20@iitk.ac.in
                                          <br />9168286333
                                        </div>
                                      </div>
                                    </div> 
                                  </div>
                                  <h5>Academics : </h5>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/harsh.chaudhary.1291/"><img src="./assets/img/team/UGY20/Harsh.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} /></a>
                                        <div className="text-center" style={{fontSize: 'small'}}>
                                          <b> Harsh Chaudhary</b>
                                          <br />harshc20@iitk.ac.in
                                          <br />9648267707
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/jaianmol.sharma.71"><img src="./assets/img/team/UGY20/jai.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a> <div className="text-center" style={{fontSize: 'small'}}>
                                          <b>	Jai Anmol Sharma </b>
                                          <br />jais20@iitk.ac.in
                                          <br />7042440700
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/profile.php?id=100058287452340"><img src="./assets/img/team/UGY20/Jatin_new.jpeg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Jatin Chauhan </b>
                                          <br />jatinc20@iitk.ac.in
                                          <br />8979352807
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="http://facebook.com/Juee.Chandrachud"><img src="./assets/img/team/UGY20/Juee.jpg " className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Juee Chandrachud</b>
                                          <br />jchandra20@iitk.ac.in
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/kinshuk08/"><img src="./assets/img/team/UGY20/kinshuk_siyol.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>	Kinshuk Siyol </b>
                                          <br />kinshuks20@iitk.ac.in
                                          <br />9145850807
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/niharika.khatri.142"><img src="./assets/img/team/UGY20/Niharika.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Niharika Khatri</b>
                                          <br />niharikak20@iitk.ac.in
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/sania.imteyaz.1"><img src="./assets/img/team/UGY20/Sania.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>	Sania Imteyaz</b>
                                          <br />saniai20@iitk.ac.in
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/13Shreyanshsinha"><img src="./assets/img/team/UGY20/Shreyansh.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>	Shreyansh Sinha</b>
                                          <br />ssinha20@iitk.ac.in
                                          <br />9399701366
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://m.facebook.com/100003118444955/"><img src="./assets/img/team/UGY20/Shubhangi.jpg " className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Shubhangi Gupta</b>
                                          <br />gshubhangi20@iitk.ac.in
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" style={{paddingBottom: '15px'}}>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/qayem.mehdi"><img src="./assets/img/team/UGY20/Qayem.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Syed Qayem Mehdi</b>
                                          <br />syedqm20@iitk.ac.in
                                          <br />7060320472
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="px-4">
                                        <a href="https://www.facebook.com/yashvardhan.rathore.14"><img src="./assets/img/team/UGY20/Yashvardhan.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                        </a><div className="text-center" style={{fontSize: 'small'}}>
                                          <b>Yashvardhan Rathore</b>
                                          <br />yrathore20@iitk.ac.in
                                          <br />9179234505
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="tab-pane fade" id="itabs-text-3" role="tabpanel" aria-labelledby="tabs-text-3-itab">
                                  <table width="100%">
                                    <tbody><tr>
                                        <td width="33%" valign="top">
                                          <b>Hall 2</b>
                                          <p>
                                            Aadvik Kumar<br />
                                            Aagam Jain<br />
                                            Abhay Shukla<br />
                                            Abhijeet<br />
                                            Abhiraj Singh<br />
                                            Aniket Suhas Borkar<br />
                                            Ankur Kumar<br />
                                            Aryan<br />
                                            Ashwin S<br />
                                            Avishk Kashyap<br />
                                            Chinmay Amrutkar<br />
                                            Dhruva Singh Sachan<br />
                                            Divyansh<br />
                                            Goural<br />
                                            Harshal Jivnani<br />
                                            Kartikeya Sati<br />
                                            Kaustav Dasgupta<br />
                                            Keshav Raj Gupta<br />
                                            Kushagra Bhatnagar<br />
                                            Love Sinha<br />
                                            Mannu Dev Sah<br />
                                            Mutasim Khan<br />
                                            Navankur Shrotriya<br />
                                            Praneat Data<br />
                                            Pranjal Singh<br />
                                            Prasoon Patel<br />
                                            Pulipati Harshvardhan<br />
                                            Pulkit Sharma<br />
                                            Raj Aryan<br />
                                            Rajat Gattani<br />
                                            Rajeev Kumar<br />
                                            Ramesh Kumar Nitharwal<br />
                                            Sahil<br />
                                            Samarth Agrawal<br />
                                            Sanat Goel<br />
                                            Sushant Faujdar<br />
                                            Syed Adeel Ahmad<br />
                                            Vansh Raj Sachan<br />
                                            Yash Vala<br />
                                          </p>
                                        </td>
                                        <td width="33%" valign="top">
                                          <b>Hall 3</b>
                                          <p>
                                            Aayush Gupta<br />
                                            Akshat Jain<br />
                                            Amol Patil<br />
                                            Anchit Gupta<br />
                                            Arko Prabho Basak<br />
                                            Chitresh Nawal<br />
                                            Devesh Pandita<br />
                                            Eesh Naugraiya<br />
                                            Gaurav Jha<br />
                                            Harshit Bhushan<br />
                                            Harshit Shakya<br />
                                            Jatin Rastogi<br />
                                            K Arnav<br />
                                            Karan Mundhra<br />
                                            Keshav Sushil Agrawal<br />
                                            Khush Gandhi<br />
                                            Kinshuk Dutt Sharma<br />
                                            Krutuparna Paranjape<br />
                                            Manjeet Singh Bhawariya<br />
                                            Milan Rastogi<br />
                                            Mohd Hamza<br />
                                            Nishanth Shanmukham C<br />
                                            Om Kothawade<br />
                                            Om Singh<br />
                                            Paras Sikarwar<br />
                                            Pranjal Gautam<br />
                                            Raghav Shukla<br />
                                            Ridin Datta<br />
                                            Saket Jain<br />
                                            Shishir<br />
                                            Shivansh Gupta<br />
                                            Shivansh Maheshwari<br />
                                            Shlok Mishra<br />
                                            Tarun Goyal<br />
                                            Utkarsh Kumar<br />
                                            Utkarsh Mishra<br />
                                            Yogesh<br />
                                            Yogit<br />
                                          </p>
                                        </td>
                                        <td width="33%" valign="top">
                                          <b>Hall 5</b>
                                          <p>
                                            Aayushman Gupta<br />
                                            Abhijeet Agarwal<br />
                                            Abhishek Punia<br />
                                            Akash Kumar<br />
                                            Akshay Choudhary<br />
                                            Alok Kumar<br />
                                            Aman Khilani<br />
                                            Archit Agarwal<br />
                                            Arpit Raj<br />
                                            Arqam Patel<br />
                                            Aryan Agarwal<br />
                                            Danish Vasdev<br />
                                            Deepanshu<br />
                                            Dhruv Misra<br />
                                            Havi Bohra<br />
                                            Konchada Prajwal Subudhi<br />
                                            Krutarth Deshmukh<br />
                                            Kunaal Gautam<br />
                                            Lakshay Gupta<br />
                                            Lakshvant Balachandran<br />
                                            Mali Ashish Ramniwas<br />
                                            Maurya Aryan Swaminath<br />
                                            Mihir<br />
                                            Mridul Dilip Nambiar<br />
                                            Ojas Brid<br />
                                            Pankajh Jhamtani<br />
                                            Porav Rohilla<br />
                                            Prateek Mishra<br />
                                            Pratham Sahu<br />
                                            Priyanshu Biswas<br />
                                            Rachit Gupta<br />
                                            Sai Vedant<br />
                                            Saicharan Booduguri<br />
                                            Samyak Singhania<br />
                                            Sanchit Hari<br />
                                            Sarda Anuj Hanuman<br />
                                            Sayeedul Islam Sheikh<br />
                                            Shantanu Kolte<br />
                                            Shiva Shrivastava<br />
                                            Shivam Gupta<br />
                                            Sidak Singh Kalra<br />
                                            Smit Sutariya<br />
                                            Sourav Sharma<br />
                                            Srijan Kumar<br />
                                            Talin Gupta<br />
                                            Tanmay Purohit<br />
                                            Utkarsh Gupta<br />
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td width="33%" valign="top">
                                          <b>Hall 12</b>
                                          <p>
                                            Abhinav Garg<br />
                                            Abhinav Mittal<br />
                                            Aditya Johri<br />
                                            Aditya Khandelwal<br />
                                            Akshat Mehta<br />
                                            Amay Raj<br />
                                            Ambuj Pyne<br />
                                            Anupam Chaudhary<br />
                                            Anurag Shivam<br />
                                            Arnav Singla<br />
                                            Aryan Yogesh Jalkote<br />
                                            Asjad Raza<br />
                                            Atharv Agarwal<br />
                                            Atishay Jain<br />
                                            Bhavaj Singla<br />
                                            Dharmraj<br />
                                            Gagan Kumar<br />
                                            Gaurav Kataria<br />
                                            Gaurish Bansal<br />
                                            Gautam Raghuvanshi<br />
                                            Hamza Masood<br />
                                            Hardik Agrawal<br />
                                            Heet Patel<br />
                                            Ishan Agrawal<br />
                                            Ishan Saxena<br />
                                            Mohammad Sibtain Ansari<br />
                                            Monil Lodha<br />
                                            Nishant Patel<br />
                                            Parth Vijay<br />
                                            Pranjal Bhardwaj<br />
                                            Pranshu Mangal<br />
                                            Pratik Ranjan Daftuar<br />
                                            Praveen Raj<br />
                                            Priyanshu Tiwari<br />
                                            Raman Malani<br />
                                            Rishabh Kedia<br />
                                            Rishiet Sharma<br />
                                            S Amandeep <br />
                                            Sahil Panjwani<br />
                                            Saksham Agarwal<br />
                                            Saksham Malhotra<br />
                                            Saumya Gupta<br />
                                            Shraman Das<br />
                                            Shreyash Kumar<br />
                                            Tushar Kumar<br />
                                            Vaibhav Kadiyan<br />
                                            Vaibhav Shaily<br />
                                            Varun Tokas<br />
                                            Yagyavalkya Soan<br />
                                            Yash Gothwal<br />
                                          </p>
                                        </td>
                                        <td width="33%" valign="top">
                                          <b>Hall 6</b>
                                          <p>
                                            Aarsha A Pillai<br />
                                            Aashi Shrivastava<br />
                                            Aashika Gupta<br />
                                            Aashruti Raj Singh<br />
                                            Aeligeti Meghana<br />
                                            Akarsha<br />
                                            Alka<br />
                                            Ananya Agrawal<br />
                                            Anushree<br />
                                            Avni Maheshwari<br />
                                            Bhavya Jaiswal<br />
                                            Chirumamilla Satya Keerthana<br />
                                            Dwija Mitesh Kakkad<br />
                                            Gauravi Hanumandas Chandak<br />
                                            Isha Jain<br />
                                            Jhalak Sharma<br />
                                            Kalika<br />
                                            Keerthi S<br />
                                            Khushi Kumari<br />
                                            Kirti<br />
                                            Lakshmi Kumari<br />
                                            Manasvi Jain<br />
                                            Mantapuram Shreeja<br />
                                            Mehar Goenka<br />
                                            Mitali Mathur<br />
                                            Mohika Agarwal<br />
                                            Monika Kumari<br />
                                            Narni Hema Sai<br />
                                            Niliena Celine Biju<br />
                                            Nishita<br />
                                            Paridhi Vaish<br />
                                            Paturi Bhavya<br />
                                            Pratibha Bajaj<br />
                                            Prishita Agrawal<br />
                                            Priya<br />
                                            Sampada Kalavakunta<br />
                                            Sharma Komal Damodar<br />
                                            Sharvani<br />
                                            Shreya Rajak<br />
                                            Shreya S Nair<br />
                                            Sneh Omer<br />
                                            Snehal Shridhar Kane<br />
                                            Srishti<br />
                                            Vrinda Juneja<br />
                                            Zainab Fatima<br />
                                          </p>
                                        </td>
                                        <td width="33%">
                                          &nbsp;&nbsp;
                                        </td>
                                      </tr>
                                    </tbody></table>
                                </div>
                                <div className="tab-pane fade" id="itabs-text-4" role="tabpanel" aria-labelledby="tabs-text-4-itab">
                                  <table width="100%">
                                    <tbody><tr>
                                        <td width="33%" valign="top">
                                          <b>MTH</b>
                                          <p>
                                            Atulya Sundaram<br />
                                            Abhijeet Agarwal<br />
                                            Abhiraj Akhouri <br />
                                            Akash Kumar<br />
                                            Ashutosh Kumar<br />
                                            Bornadhya Abir Rajbongshi<br />
                                            Dev Gupta<br />
                                            Deven Gangwani<br />
                                            Hamza Masood<br />
                                            Harsh Bihany<br />
                                            Kapu Nirmal Joshua<br />
                                            Kushagra Bhatnagar<br />
                                            Lakshika<br />
                                            Mihir<br />
                                            Nandan Madhuj<br />
                                            Rahul Jha<br />
                                            Rohit Jangid<br />
                                            Sanat Goel<br />
                                            Shekhar Sharma<br />
                                            Shlok Mishra<br />
                                            Siddharth Maurya<br />
                                            Subhradeep Mahata<br />
                                            Sumit<br />
                                            Tanmey Agarwal<br />
                                            Tarun Goyal<br />
                                            Tejas Gupta<br />
                                            Yogit<br />
                                          </p>
                                        </td>
                                        <td width="33%" valign="top">
                                          <b>ESC 111/112</b>
                                          <p>
                                            Amay Raj<br />
                                            Anuj Singhal<br />
                                            Arqam Patel<br />
                                            Aryan Bhardwaj<br />
                                            Asjad Raza<br />
                                            Atharva Gupta<br />
                                            Avni Maheshwari<br />
                                            Ayush Kumar<br />
                                            Devansh Jain<br />
                                            Dhruv<br />
                                            Harshit Chaudhary<br />
                                            Harshit Gupta<br />
                                            Khushi Agrawal<br />
                                            Krutharth Deshmukh<br />
                                            Mehar Goenka<br />
                                            Milan Rastogi<br />
                                            Nitesh Kaushal<br />
                                            Om Singh<br />
                                            Priya<br />
                                            Rajeev Kumar<br />
                                            Rajvardhan Verma<br />
                                            Ruchit Rungta<br />
                                            S Amandeep<br />
                                            Shishir<br />
                                            Shivansh Maheshwari<br />
                                            Shwetank Anand<br />
                                            Syed Adeel Ahmad<br />
                                            Tejas Ahuja <br />
                                            Tejasvi<br />
                                          </p>
                                        </td>
                                        <td width="33%" valign="top">
                                          <b>TA 111</b>
                                          <p>
                                            Aarsha A Pillai <br />
                                            Anushree Chaudhary<br />
                                            Aryan Prajapati<br />
                                            Meenakshi <br />
                                            Dhruv Misra<br />
                                            Himanshu Yadav<br />
                                            Kartik Anant Kulkarni<br />
                                            Mayankit<br />
                                            Payal Dangi<br />
                                            Raj Agrawal<br />
                                            Sanchit Hari<br />
                                            Shashank Singh Tomar<br />
                                            Shashikant Yadav<br />
                                            Shivam Gupta<br />
                                            Shivam Gupta<br />
                                            Shraman Das<br />
                                            Srijan Shekhar<br />
                                            Sumay Avi<br />
                                            Smit Sutariya<br />
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td width="33%" valign="top">
                                          <b>ECC</b>
                                          <p>
                                            Aditya Vikram Jain<br />
                                            Gauravi Chandak<br />
                                            Kishan Kumar<br />
                                            Krutuparna Paranjape<br />
                                            Om Shivam Verma<br />
                                            Porav Rohilla<br />
                                            Vaibhav Shaily<br />
                                            Zainab Fatima<br />
                                          </p>
                                        </td>
                                        <td width="33%" valign="top">
                                          <b>CHM 112/113</b>
                                          <p>
                                            Aman Pratap Yadav<br />
                                            Ashutosh Agrawal<br />
                                            Chitwan<br />
                                            Deeksha Rawat<br />
                                            Kshitij Ranjan<br />
                                            Malik Zadah Irfan<br />
                                            Naveen Yadav<br />
                                            Nishanth Shanmukham C<br />
                                            Pradeep Chahal<br />
                                            Praveen Raj<br />
                                            Rounak Sharma<br />
                                            Siddhant Singh<br />
                                            Varun Tandon<br />
                                          </p>
                                        </td>  
                                        <td width="33%" valign="top">
                                          <b>LIF 111</b>
                                          <p>
                                            Amritansh Tripathi<br />
                                            Emaad Ahmed<br />
                                            Jai Verma<br />
                                            Sahil<br />
                                            Saicharan Booduguri<br />
                                            Sarthak Agarwal<br />
                                            Saumya Kanchhal<br />
                                            Sharvil Sachin Athaley<br />
                                            Shraddhangi Goyal<br />
                                            Srijan Kumar<br />
                                            Vikas Yadav<br />
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td width="33%" valign="top">
                                          <b>PHY 113/114</b>
                                          <p>
                                            Aayushman Gupta<br />
                                            Abhishek Pandey<br />
                                            Akshat Mehta<br />
                                            Aman<br />
                                            Anushree<br />
                                            Archit Agarwal<br />
                                            Arnav Singla<br />
                                            Ashish Patidar<br />
                                            Diptansu Poddar <br />
                                            Gaurav Jha<br />
                                            Hardik Agrawal<br />
                                            Kaustubh Jha<br />
                                            Kriti<br />
                                            Lakshwant Balachand<br />
                                            Monil Lodha<br />
                                            Mridul Pandey<br />
                                            Nishant Patel<br />
                                            Paras Sikarwar<br />
                                            Prasoon Patel<br />
                                            S. Praveen Kumar<br />
                                            Sai Vedant<br />
                                            Sanyam Pasricha<br />
                                            Siddharth Garg<br />
                                            Siddharth Pathak<br />
                                            Sonal S<br />
                                            Swastik Singhal<br />
                                            Yash Krishnatery<br />
                                          </p>
                                        </td>
                                        <td width="33%" valign="top">
                                          <b>PHY 112/115</b>
                                          <p>
                                            Abhay Shukla<br />
                                            Adarsh Sharma<br />
                                            Akkinepally Kruthi<br />
                                            Ankur Kumar<br />
                                            Anunay Shukla<br />
                                            Aravind Seshadri <br />
                                            Ashmit Bathla<br />
                                            Chetanya Goenka<br />
                                            Deepanshu Yadav<br />
                                            Deepanshu<br />
                                            Devansh Ojha<br />
                                            Himanshu Mital<br />
                                            J.SriManichandana<br />
                                            Jhalak Sharma<br />
                                            Harsh Murdeshwar<br />
                                            Piyush Bhatia<br />
                                            Priyansh Singh<br />
                                            Priyanshu Chaurasiya<br />
                                            Rajat Gattani<br />
                                            Saket Jain<br />
                                            Sanyam Jain<br />
                                            Sarda Anuj<br />
                                            Satish Panda<br />
                                            Shiv Narayan<br />
                                            Shiva Shrivastava<br />
                                            Shivansh Pandey<br />
                                            Shorya Tamrakar<br />
                                            Suman Banerjee<br />
                                            Tushaar Ranganathan<br />
                                            Varun Sappa<br />
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody></table>
                                </div>
                                <div className="tab-pane fade" id="itabs-text-10" role="tabpanel" aria-labelledby="tabs-text-10-itab">
                                  <table width="100%">
                                    <tbody><tr>
                                        <td width="33%" valign="top">
                                          <b>Creative Team</b>
                                          <p>
                                            Hridhan Patel<br />
                                            Khushi Kumari<br />
                                            Mubarak<br />
                                            Pratibha Bajaj<br />
                                            Sharvani Jadhav<br />
                                            Vedant Agarwal<br />
                                          </p>
                                        </td>
                                        <td width="33%" valign="top">
                                          <b>Web Team</b>
                                          <p>
                                            Abhinav Garg<br />
                                            Tarun Goyal<br />
                                            Yash Kumar Dromar<br />
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody></table>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs-text-6" role="tabpanel" aria-labelledby="tabs-text-6-tab">
                              <div className="row" style={{paddingBottom: '15px'}}>
                                <div className="col-md-6">
                                  <div className="px-4">
                                    <img src="./assets/img/team/officestaff/vandana_shukla.jpeg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '50%'}} />
                                    <div className="text-center" style={{fontSize: 'small'}}>
                                      <b>Vandana Shukla</b><br />vandana@iitk.ac.in<br />+91-512-259-7784
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="px-4">
                                    <img src="./assets/img/team/officestaff/manoj_kumar.jpeg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '50%'}} />
                                    <div className="text-center" style={{fontSize: 'small'}}>
                                      <b>Manoj Kumar</b><br />manniitk@gmail.com<br />+91-512-259-7784
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="tabs-text-5" role="tabpanel" aria-labelledby="tabs-text-5-tab">
                              <div className="row" style={{paddingBottom: '15px'}}>
                                <div className="col-md-4">
                                  <div className="px-4">
                                    <img src="./assets/img/team/pgteam/arvindpg.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                    <div className="text-center" style={{fontSize: 'small'}}>
                                      <b>Aravind</b><br />maravind21@iitk.ac.in<br />8078727873
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="px-4">
                                    <a href="https://www.facebook.com/basu.tandon">
                                      <img src="./assets/img/team/pgteam/Basu1.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                    </a>
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Basu</b><br />basut21@iitk.ac.in<br />9690612236
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="px-4">
                                    <a href="https://m.facebook.com/chandanpandit05">
                                      <img src="./assets/img/team/pgteam/Chandan.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                    </a><div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Chandan</b><br />pchandan21@iitk.ac.in<br />8114386641
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row" style={{paddingBottom: '15px'}}>
                                <div className="col-md-4">
                                  <div className="px-4">
                                    <a href="https://www.facebook.com/fouziya.anjum.509">
                                      <img src="./assets/img/team/pgteam/Fouziya.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                    </a><div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Fouziya</b><br />fouziya21@iitk.ac.in<br />7066709782
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="px-4">
                                    <img src="./assets/img/team/pgteam/Harunpg.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Harun</b><br />harun@iitk.ac.in<br />9990450458
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="px-4">
                                    <a href="https://m.facebook.com/maneesh.kr2?_rdr">
                                      <img src="./assets/img/team/pgteam/Maneeshpg.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                    </a><div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Maneesh</b><br />mmkr20@iitk.ac.in<br />9952942554
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row" style={{paddingBottom: '15px'}}>
                                <div className="col-md-4">
                                  <div className="px-4">
                                    <img src="./assets/img/team/pgteam/Mujahidpg.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Mujahid</b><br />mujahid@iitk.ac.in<br />9997762247
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="px-4">
                                    <img src="./assets/img/team/pgteam/shubham_verma.jpg" className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '60%'}} />
                                    <div className=" text-center" style={{fontSize: 'small'}}>
                                      <b>Shubham</b><br />vshubham20@iitk.ac.in<br />9452138735
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
  );
};
