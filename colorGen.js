const colors=["#81689D","#FE7A36","#91ADC2","#8A9B68"]
 
export default function colorGen(){
    const index=Math.floor(Math.random()*colors.length);
    return colors[index];
 }