import React from 'react'
import '../../styles/header.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {GoSearch} from 'react-icons/go'
import {Link} from 'react-router-dom'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <header>
        <div className="nav__top">
            <p>All PCs Built in 2 Business Days</p>
        </div>
        <div className="main__nav">
            <div className="start__main">
            <div className="nav-logo">
                <Link to={''}>
                <svg viewBox="0 0 94 24" width="1em" height="1em" class="w-20 h-4 fill-current text-white"><path d="M6.907 0l8.227 11.906-.008-.201V0h6.944v24h-6.44L6.944 11.363V24H0V0h6.907zM94 0v6.322h-6.314v17.677h-7.374V6.322H74V.001h20zM56.406 0l3.902 6.16L64.466 0h7.623l-7.753 11.883 7.885 12.116h-8.082l-3.937-6.1-3.875 6.1h-7.894l7.735-11.896L48.32.001h8.086zM46.02 0l-9.49 17.914h9.29v6.085H25.743l9.319-17.952h-8.805V0h19.764z" fill-rule="evenodd"></path></svg>
                </Link>
                </div>
                <ul>
                <li>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Gaming PCs
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                       <Link to='product'>
                         <MenuItem onClick={handleClose}>
                            Profile
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            My account
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            Logout
                        </MenuItem>
                        </Link>
                    </Menu>
                </li>
                <li>
                <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Components
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                         <Link to='product'>
                         <MenuItem onClick={handleClose}>
                            Profile
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            My account
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            Logout
                        </MenuItem>
                        </Link>
                    </Menu>
                </li>
                <li>
                <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Monitors
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to='product'>
                         <MenuItem onClick={handleClose}>
                            Profile
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            My account
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            Logout
                        </MenuItem>
                        </Link>
                    </Menu>
                </li>
                <li>
                <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Peripherals
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to='product'>
                         <MenuItem onClick={handleClose}>
                            Profile
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            My account
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            Logout
                        </MenuItem>
                        </Link>
                    </Menu>
                </li>
                <li>
                <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Software
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to='product'>
                         <MenuItem onClick={handleClose}>
                            Profile
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            My account
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            Logout
                        </MenuItem>
                        </Link>
                    </Menu>
                </li>
                <li>
                <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Community
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to='product'>
                         <MenuItem onClick={handleClose}>
                            Profile
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            My account
                        </MenuItem>
                        </Link>
                        <Link to='product'>
                        <MenuItem onClick={handleClose}>
                            Logout
                        </MenuItem>
                        </Link>
                    </Menu>
                </li>
            </ul>
            </div>
            <div className="nav__end">
                <div className="search__item">
                   <GoSearch/>
                </div>
                <div className="support__item">
                <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" class="text-white hover:text-nzxt-dark-grey-100 h-5 md:h-6 w-5 md:w-6 mr-2 md:mr-0"><path d="M12 .084C5.42.084.087 5.418.087 11.997.087 18.577 5.42 23.91 12 23.91s11.913-5.334 11.913-11.913C23.913 5.417 18.579.084 12 .084zm0 1.5c5.75 0 10.413 4.662 10.413 10.413S17.75 22.41 12 22.41 1.587 17.748 1.587 11.997C1.587 6.247 6.249 1.584 12 1.584z"></path><path d="M8.044 8.4a4.099 4.099 0 017.965 1.365c0 1.28-.774 2.313-2.008 3.135-.405.27-.834.499-1.263.69l-.283.12-.222.085-.085.03a.75.75 0 01-.475-1.423l.136-.05.2-.08.12-.053a7.05 7.05 0 001.04-.567c.86-.573 1.34-1.214 1.34-1.889a2.599 2.599 0 00-5.05-.866.75.75 0 11-1.415-.498zm3.966 8.429a.75.75 0 01.103 1.493l-.113.007a.75.75 0 01-.102-1.494l.113-.006z"></path></svg>
                </div>
                <div className="user__item">
                <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24" class="h-5 md:h-6 w-5 md:w-6 text-white hover:text-nzxt-dark-grey-100"><path d="M16.954 14.986a5.735 5.735 0 015.731 5.514l.004.22v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a4.235 4.235 0 00-4.023-4.23l-.212-.004h-9.97a4.235 4.235 0 00-4.229 4.023l-.005.211v2.493a.75.75 0 01-1.493.102l-.007-.102V20.72a5.735 5.735 0 015.515-5.73l.22-.004h9.97zM11.97.031a5.735 5.735 0 100 11.47 5.735 5.735 0 000-11.47zm0 1.5a4.235 4.235 0 110 8.47 4.235 4.235 0 010-8.47z"></path></svg>
                </div>
                <div className="cart__item">
                <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="h-5 md:h-6 w-5 md:w-6 fill-current lg:text-white lg:hover:text-nzxt-dark-grey-100 text-nzxt-volt-400"><path d="M9.69 20.142a1.926 1.926 0 100 3.853 1.926 1.926 0 000-3.853zm0 1.5a.426.426 0 110 .853.426.426 0 010-.853zm9.412-1.5a1.927 1.927 0 100 3.853 1.927 1.927 0 000-3.853zm0 1.5a.426.426 0 110 .853.426.426 0 010-.853zM4.396.141c.317 0 .596.2.703.49l.03.1.905 4.158.045-.015a.745.745 0 01.097-.02l.102-.007H23.22a.75.75 0 01.749.792l-.013.099-1.884 9.892a3.1 3.1 0 01-2.903 2.48l-.185.002H9.94a3.101 3.101 0 01-3.058-2.293l-.042-.18L3.79 1.641H.866A.75.75 0 01.123.993L.116.891A.75.75 0 01.765.148L.866.141h3.53zm17.916 6.206H6.352l1.955 8.983c.145.71.747 1.23 1.472 1.279l.146.003H19a1.602 1.602 0 001.566-1.135l.035-.138 1.711-8.992z"></path></svg>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header