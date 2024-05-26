import React, { useEffect } from 'react'

const DamageRelations = ({damages}) => {
    useEffect(() => {
      
        const arrayDamage = damages.map((damage) =>
            separateObjectBetweenToAndFrom(damage))
    }, [])

    const separateObjectBetweenToAndFrom = (damage) => {
        const from = filterDamageRelations('_from', damage);
        const to = filterDamageRelations('_to', damage);

        return {from , to}
    }

    const filterDamageRelations = (value, damage) => {
        console.log(Object.entries(damage));
    }

  return (
    <div>DamageRelations</div>
  )
}

export default DamageRelations