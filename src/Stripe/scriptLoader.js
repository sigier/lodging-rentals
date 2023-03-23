const scriptLink =  process.env.REACT_APP_STRIPE_LINK;

const  promiseFileLoad = () => {
    return new Promise((resolve,reject)=>{
    const script = document.createElement('script');
    script.type ='text/javascript'; 
    script.src = scriptLink;

    script.onload = () => { resolve();};
    document.getElementsByTagName('head')[0].appendChild(script);
});
};

export default promiseFileLoad;