const data = new Date();

const dataOptions = {
    weekend: 'long',
    year: 'numeric',
    month:'long',
    day: 'numeric'
}
data.toLocaleDateString('pt-BR', dataOptions)
console.log(data)

const horarioOptions = {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Sao_Paulo'
}

data.toLocaleString('pt-BR', {
    ...dataOptions, 
    ...horarioOptions
 })

 const formatData = new Intl.DateTimeFormat('pt-BR',{
    ...dataOptions, 
    ...horarioOptions
 })

 const dataFormat = () => formatData.format(data)

 export default dataFormat