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

 const dataFormat = () => formatData.format(datas)

 export const removeDataRepetidas = (datas) => {
    const datasUnicas = []
    datas.forEach((data=>{
        if(datasUnicas.indexOf(data.dataFormatada) === -1){
            datasUnicas.push(data.dataFormatada)
        }
    }))
    return datasUnicas
}

export const ordenaDatas = (data) => {
    data.sort( (a,b) => {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
        return primeiraData - segundaData
    })
}




 export default dataFormat