import React from 'react';
import Logo from '../../Logo/Logo';
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationitItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
class toolbar extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        color:'rgba(0, 0, 0, .01)'
    }};
    listenScrollEvent = e => {
        if (window.scrollY > 200) {
            this.setState({color: 'white'})
        } else {
          
          this.setState({color: 'rgba(0, 0, 0, .01)'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render() {
      const bgColor=this.state.color;
        return (
    <div>
    <header className="Toolbar" style={{backgroundColor:bgColor}}>
        <DrawerToggle clicked={this.props.drawerToggleclicked} />
        <div className="LogoToolbar" >
             <Logo />
            
        </div>
        <nav className="DesktopOnly">
           <NavigationItems />
           
        </nav>
    </header>
  
    </div>
 );
}
}


export default toolbar;
