const http=require('http');

const server=http.createServer((req,res)=>
{
    res.setHeader('Access-Control-Allow-Origin','*');
    //''里的东西是指允许跨域，不需要背下来，可以去查
    //这里的*是指所有人都可以来访问我的后端

    res.setHeader('Content-Type','application/json');

    const url=new URL(req.url,'http://localhost:3000');

    const guessStr=url.searchParams.get('guess');
    const guessNum=Number(guessStr);

    const correctAnswer=427;
    let isCorrect=false;

    if (guessNum===correctAnswer)
    {
        isCorrect=true;
    }
    
    const myData={
        isCorrect:isCorrect,
        msg:"你猜的数字是："+guessStr,
        tips:"春夏之交"
    };
    //对象格式

    res.end(JSON.stringify(myData));
    //转成纯字符，放进JSON
});


server.listen(3000,()=>{
    console.log('后端已在3000端口启动');
});