export const EmailIcon=(props)=>{
    const {height, width, dark} = props
    return(
        <a class="navbar-brand" href="mailto:isabellelissina@gmail.com" target="_blank"  rel="noopener noreferrer me" title="Email me"> 
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" fill="none" stroke={dark ? "white" : "black"}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
        </svg></a>
    )
}