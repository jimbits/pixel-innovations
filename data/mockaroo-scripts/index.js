  const resf = await fetch(`./female-developers.json`)
  const f = await resf.json()
  const keysf = Object.keys(f.female)

  const resm = await fetch(`./male-developers.json`)
  const m = await resm.json()
  const keysm = Object.keys(m.male)


 


const mdevs = keysm.map(item=>{
      m.male[item].key = item
     return m.male[item] 
})

const fdevs = keysf.map(item=>{
    f.female[item].key = item
   return f.female[item] 
})


let developers = {}

fdevs.forEach((item, index) =>{
      developers[keysm[index]] = mdevs[index]
      developers[keysf[index]] = fdevs[index]
      
})

console.log(developers)


 

