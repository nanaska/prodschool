import { Context } from '../pages/_app';
import { observer } from 'mobx-react-lite'
import {useContext} from 'react'
import styles from './Home.module.css'
import Image from "next/image"
import TestPhoto from "./hdr009.jpg"
const Home = observer(() => {
    const {device} = useContext(Context)
    console.log(device.devices)
  return (
    <div className={styles.shop_section}>
        <div className={styles.container}>
            {device.devices.map((item, index)=>{
                
                return(
                <div key={index} >
                    <Image src={TestPhoto} width={100} height={100} />
                    <div>
                        {item.name}
                    </div>      
                </div>
                )
            })}

        </div>
    </div>
  )
})

export default Home