import React from 'react'
import Card from 'react-bootstrap/Card';
import Alec from "../../img/alec.svg";
import Edwin from "../../img/edwin.svg";
import Layla from "../../img/layla.svg";

function Barbers() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-barlow-black uppercase'>our barbers</h1>
      <p className='max-w-3xl text-center mb-12 font-work-sans px-4'> At the heart of our barbershop, our talented team brings years of expertise, passion, and attention to detail to every haircut and grooming service. From classic styles to modern trends, trust our barbers to craft the perfect look tailored just for you.</p>
      
      <div className='bg-white p-12 rounded-xl flex flex-col md:flex-row gap-4'>
        <Card style={{ width: '20rem' }} className='shadow-md'>
        <Card.Img variant="top" src={Alec} />
        <Card.Body>
            <Card.Title className='font-barlow-black uppercase'>Alec Landry</Card.Title>
            <Card.Subtitle className='mb-2 text-muted font-work-sans'>Barber for 7 years</Card.Subtitle>
            <Card.Text className='font-work-sans'>
                Alec Landry, the barber, is renowned for his meticulous cuts and friendly demeanor, making every visit a pleasant experience.
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }} className='shadow-md'>
        <Card.Img variant="top" src={Edwin} />
        <Card.Body>
            <Card.Title className='font-barlow-black uppercase'>Edwin Jett</Card.Title>
            <Card.Subtitle className='mb-2 text-muted font-work-sans'>Founder and CEO of Vintage Shears Barbershop</Card.Subtitle>
            <Card.Text className='font-work-sans'>
                Edwin Jett, the CEO of the barbershop, excels in leadership and innovation, driving the business to new heights with his approach.
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '20rem' }} className='shadow-md'>
        <Card.Img variant="top" src={Layla} />
        <Card.Body>
            <Card.Title className='font-barlow-black uppercase'>Layla Nesim</Card.Title>
            <Card.Subtitle className='mb-2 text-muted font-work-sans'>Barber for 4 years</Card.Subtitle>
            <Card.Text className='font-work-sans'>
                Layla, an intermediate barber, is known for her growing expertise and warm approach, providing clients with reliable service.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Barbers
