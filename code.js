let userinput=document.getElementById("date");
userinput.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result")

function calcultaeAge()
{
    let birthdate=new Date(userinput.value)

    let d1=birthdate.getDate();
    let m1=birthdate.getMonth();
    let y1=birthdate.getFullYear();

    let toady=new Date();
    let d2=toady.getDate();
    let m2=toady.getMonth();
    let y2=toady.getFullYear();

    let d3,m3,y3;
    y3=y2-y1;

    if(m2>=m1)
    {
        m3=m2-m1;
    }
    else
    {
        y3--;
        m3=12+m2-m1;
    }

    if(d2>=d1)
    {
        d3=d2-d1
    }
    else
    {
        m3--;
        d3=getdaysinmonth(y1,m1)+d2-d1;
    }

    if(m3<0)
    {
        m3=11
        y3--;

    }
    result.innerHTML=`Your are <span>${y3}</span> years , <span>${m3}</span> months  & <span>${d3}</span> days old;`

function getdaysinmonth()
{
    return new Date(year,month,0).getDate();
}

}