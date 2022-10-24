import React from 'react'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const SideBar = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center"
      }}>
      <Typography mt="20px" variant='h4' >NASA {t("BROWSER")}</Typography>

      <Box
        sx={{
          margin: "10px 0 0 120px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Breadcrumbs separator='|'>
          <Link className='link' component="button" variant='subtitle2' to='/'>{t("HOME")}</Link>
          <Link className='link' component="button" variant='subtitle2' to='/asteroids'>{t("NEARBY_ASTEROIDS")}</Link>
          <Link className='link' component="button" variant='subtitle2' to='/apod'>{t("ASTRONOMY_PICTURE_OF_THE_DAY")}</Link>
          <Link className='link' component="button" variant='subtitle2' to='new_planet'>{t("SUBMIT_NEW_PLANET")}</Link>
        </Breadcrumbs>
        <Breadcrumbs separator='|' sx={{ marginLeft: "80px" }}>
          <Link className='link' component="button" variant='subtitle2' onClick={() => i18next.changeLanguage("en")}>EN</Link>
          <Link className='link' component="button" variant='subtitle2' onClick={() => i18next.changeLanguage("ru")}>РУ</Link>
          <Link className='link' component="button" variant='subtitle2' onClick={() => i18next.changeLanguage("am")}>ՀՅ</Link>
        </Breadcrumbs>
      </Box>
    </Box >
  )
}

export default SideBar