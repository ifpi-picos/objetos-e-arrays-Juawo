import convert from "convert";

const dias = parseInt(prompt('Digite uma quantidade de dias para ser convertido em minutos : '))
const minutos = convert(dias,'days').to('minutes')
console.log(`${dias} dias em minutos é ${minutos} min`)

const gigaBytes = parseInt(prompt('Digite uma quantidade de Gigabytes para ser convertido em bytes : '))
const bytes = convert(gigaBytes,'GiB').to('bytes')
console.log(`${gigaBytes} GB em bytes é ${bytes} bytes`)




