import React from 'react'
import Memory, { ResponsiveMasonry} from 'react-responsive-masonry'
import galleryimg from './GalleryImg'
// import '../../styles/home.css'
export default function MemoryImageGallery() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
     <Memory gutter='1rem'>
{
    galleryimg.map((item,index)=>(
        <img 
        className='memory_img'
        src={item} key={index} alt="" style={{widows:'100%',
    display:'block', borderRadius:'10px'}}/>
    ))
}
     </Memory>
    </ResponsiveMasonry>
  )
}
