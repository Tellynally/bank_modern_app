import styles from '../style';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
  <div className={`${styles.flexStart} md:flex-row flex-col mb:-8 w-full`}>
  

   <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
       {footerLinks.map((footerLink) => (
        <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[130px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            {footerLink.title}
          </h4>
          <ul className="list-none mt-4">
            {footerLink.links.map((Link, index) => (
              <li key={Link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                {Link.name}
              </li>
            ))}
          </ul>
          </div>
       ))}
   </div>
    </div>

       <div className="w-full flex justify-between items-center md:flex=row flex-col mt-9 pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-[18px] leading-[27px] text-white">
          2021 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img 
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[18px] h-[18px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}/>
          ))}
        </div>
       </div>
    </section>
  )


export default Footer