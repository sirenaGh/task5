import React from 'react'
import Card2 from '../components/Card2'
import i2 from './../../../assets/i2.png'
import i7 from './../../../assets/i7.jpg'
import i5 from './../../../assets/i5.png'
import i6 from './../../../assets/i6.png'
import i3 from './../../../assets/i3.jpg'
import i1 from './../../../assets/i1.png'
import i8 from './../../../assets/i8.png'
import i4 from './../../../assets/i4.png'
import BecomIn from '../../../components/becomIn/BecomIn'
import Bestedu from '../../../components/bestEdu/Bestedu'
import Card3 from '../components/Card3'
import picc1 from './../../../assets/344.jpg'
import picc2 from './../../../assets/picc2.jpg'
import picc3 from './../../../assets/picc3.jpg'
import pic7 from './../../../assets/picc3.jpg'
import Card from '../../News/components/Card'
import Pic1 from './../../../assets/12.jpg'
import Pic2 from './../../../assets/13.jpg'
import Card4 from '../components/Card4'
import per from './../../../assets/per.jpg'
import WhyChoose from './../../../components/whychoose/WhyChoose'
import pic34 from './../../../assets/344.jpg'
function HomePage() {
  return (
    <div>
       <h1 className="text-blue-700 my-10 text-center">Browse Top Category</h1>
       <div className="grid grid-cols-4 gap-3">
       <Card2 title22="Science" title33="1,391 courses" img2={i2}/>
       <Card2 title22="Business" title33="3,234 courses" img2={i7}/>
       <Card2 title22="FinanceAcc" title33="391 courses" img2={i5}/>
       <Card2 title22="Design" title33="7,291 courses" img2={i6}/>
       <Card2 title22="Music" title33="9,114 courses" img2={i3}/>
       <Card2 title22="Marketing" title33="2,391 courses" img2={i1}/>
       <Card2 title22="Photography" title33="7,991 courses" img2={i8}/>
       <Card2 title22="Animation" title33="6,491 courses" img2={i4}/>
       </div>
       <p className="text-black text-center mb-16">We have more category here.<a href="#">Browse all</a></p>
      <BecomIn/>
      <Bestedu/>
      <div className="bg-amber-50 p-5">
        <h1 className="text-blue-700 text-center mt-10 mb-4">The right Course For You</h1>
        <p className="text-black mb-5 text-center">Far far away,behind the word mountains,far from the countries Vokalia and<br/> Consnnantia,there live the blind texts.</p>
       <div className="grid grid-cols-3 gap-4 mx-5"> 
        <Card3 picc={picc1}/>
        <Card3 picc={picc2}/>
        <Card3 picc={picc3}/>
        </div>
      </div>
      <div className="text-center bg-no-repeat  bg-cover p-60 mb-12  " style={{
      backgroundImage:
        "url('https://img.freepik.com/premium-photo/school-supplies-blue-background-back-school-copy-space_977232-370.jpg?w=360')"
    }}>
        <h1>Education for tomorrow's Leaders</h1>
        <p className="my-10">Far far away,behind the word mountains,far from the countries<br/> Vokalia and Consnnantia,there live the blind texts.</p>
        <button className=" text-white  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-xl text-xs">ENROLL NOW</button>
      </div>
      <div className="flex  space-x-56  ">
        <div className="p-10 mb-14 ml-12">
        <h1 className="text-blue-700">About Us</h1>
        <p className="text-black">Far far away, behind the word mountains,far from<br/> the countries Vokalia and Consnnantia, there live<br/> the blind texts.<br/><br/>Separated they live in BookMarksgrove right at the <br/>cost of the semenatics, a large language ocean</p>
        <p className="text-black my-4">- Separated they live<br/>- Bookmarksgrove right at the coast<br/>- large language ocean</p>
        <div className="flex space-x-2 "> <button className=" text-white  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-xl text-xs">ADMISSION</button>
        <button className=" text-white  font-normal transition ease-in-out delay-150 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-3 rounded-xl text-xs">LEARN MORE</button></div>
        </div>
        <img className="w-80 h-80 shadow-2xl " src={pic7}/>
      </div>
      <div className="text-center bg-amber-50 mb-8 p-14">
        <h1 className="text-blue-700">School News</h1>
        <p className="text-black my-4">Far far away, behind the word mountains,far from the countries Vokalia and <br/>Consnnantia, there live the blind texts.</p>
        <div className="grid grid-cols-2 gap-4 my-10">
        <Card img={Pic1} title={"Education for Tomorrow's Leaders"}/>
        <Card img={Pic2} title={"Enroll Your Kids This Summer to get 30% off"}/>
        </div>
      </div>
      <div>
        <h1 className="text-blue-700 mt-6 text-center">Pricing</h1>
        <p className="text-black my-4 text-center">Far far away, behind the word mountains,far from the countries Vokalia and <br/>Consnnantia, there live the blind texts.</p>
        <div className="grid grid-cols-3 gap-4 mx-8">
        <Card4 title22="Starter" title33="50.99"/>
        <Card4 title22="Business" title33="99.99"/>
        <Card4 title22="Premium" title33="199.99"/>
        </div>
      </div>
      <div className="bg-amber-50 mb-8 text-center py-28  ">
          <h1 className="text-blue-700">Testimonials</h1>
          <p className="text-black my-5">Far far away, behind the word mountains,far from the countries Vokalia<br/> and Consnnantia, there livethe blind texts.Separated they live in <br/>BookMarksgrove right at the cost of the semenatics, a large language<br/> ocean</p>
         <div className="ml-36"> <img className="rounded-full w-20 h-20 translate-x-full ml-96   " src={per}/></div>
         <h3 className="text-blue-700">John Doe<br/>CEO,Founder</h3>
      </div>
      <WhyChoose pic34={pic34}/>
    </div>
  )
}

export default HomePage