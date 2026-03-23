import React from 'react'
import Card from './Card'
const CardSection = () => {
  return (
    
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Our Features</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Fast Development"
          description="Build modern UI quickly using utility classes."
        />
        <Card
          title="Responsive Design"
          description="Easily create mobile-friendly layouts."
        />
        <Card
          title="Reusable Components"
          description="Create reusable React components efficiently."
        />
         <Card
          title="Virtula Dom"
          description="Page reload has reduced"
        />
        <Card
          title="Reusable Components"
          description="Create reusable React components efficiently."
        />
         <Card
          title="Virtula Dom"
          description="Page reload has reduced"
        />
      </div>
    </section>

  )
}

export default CardSection