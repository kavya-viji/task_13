var num=prompt(" please enter number");
var reverse=0;
document.write("original number:" "+num+");

while(num!=0)
{
reverse=(reverse*10)+(num%10);
num=parseInt(num/10);
}
document.write("reverse number:" +reverse);






/*var n= parseInt(prompt(" please enter number"));
let i=1;
while(i<=n)
{
	var a=i**3
	i++;
}
console.log(a);*/