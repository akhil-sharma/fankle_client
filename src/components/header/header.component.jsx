import React from 'react';
import { 
    HeaderContainer, 
    // LogoContainer,
    // OptionsContainer,
    // OptionLink 
} from './header.styles';


const Header = ({currentUser, hidden, signOutStart}) => (

    <HeaderContainer>
        {/* <LogoContainer to='/'>
            <Logo/>
        </LogoContainer> */}

        {/* <OptionsContainer>
            <OptionLink to='/shop'> SHOP </OptionLink>
                
            <OptionLink to='/shop'> CONTACT </OptionLink>

            {
                currentUser ?
                <OptionLink as='div' onClick={ signOutStart }>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }

            <CartIcon/>
        </OptionsContainer>

        {
            hidden ? null : <CartDropdown />
        } */}
    </HeaderContainer>
)

export default Header;