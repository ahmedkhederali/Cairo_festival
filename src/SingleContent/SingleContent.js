import React from 'react'
import './SingleContent.css'
import {img_300,unavailable} from '../config/config'
import { Badge } from '@material-ui/core'
import ContentModal from '../components/contentModal/ContentModal'
function SingleContent({id,poster,title,media_type,vote,date}) {
    return (
        <ContentModal  media_type={media_type} id={id}>
        <Badge badgeContent={vote} color={vote>5 ? "primary" : "secondary"}/>
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className='title'>{title}</b>
        <span className='subTitle'>{media_type}
            <span className='subTitle'>{date}</span>
        </span>
        </ContentModal>
    )
}

export default SingleContent
