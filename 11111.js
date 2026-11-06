const btn=document.getElementById('myBtn');
const text=document.getElementById('textID');
const input=document.getElementById('guessInput')
//这里的id是在HTML里面定义的
btn.onclick=async function()
{
    const userguess=input.value;

    if (userguess === "")
    {
        text.innerText="请输入数字啊 别空着！";
        text.style.color="#FB6F0B";
        return;
    }
    
    text.innerText="等会 后端在看了…";

    const response=await fetch('http://localhost:3000/?guess='+ userguess);

    const data=await response.json();

    if (data.isCorrect===true)
    {
        text.innerText="天呐，这都被你猜对了！";
        text.style.color="#5BB7B1";
    }

    else
    {
        text.innerText="再想想，给你点提示呗~"+data.tips;
        text.style.color="#EF5B5D";
    }

    //text.innerText="前端收到："+data.msg;
}