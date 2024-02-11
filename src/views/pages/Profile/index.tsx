import { Avatar } from '@mui/material'
import TypoDisplay from 'src/ui-component/Typo/TypoDisplay'
import TypoText from 'src/ui-component/Typo/TypoText'
import ImageAvatar from '../../../assets/banners/illustration_dashboard.png'
import {
  FaBookmark,
  FaBootstrap,
  FaDocker,
  FaFacebook,
  FaGithub,
  FaJsSquare,
  FaLinkedin,
  FaPhone,
  FaReact,
  FaRegAddressCard,
  FaTrophy
} from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { FaCss3Alt } from 'react-icons/fa6'
import {
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiAntdesign,
  SiMui,
  SiWebpack,
  SiVitest,
  SiMongodb,
  SiNestjs,
  SiJira
} from 'react-icons/si'
import { DiNodejsSmall } from 'react-icons/di'
import ButtonIcon from 'src/ui-component/Button/ButtonIcon'
import { Link } from 'react-router-dom'
import { ImHtmlFive } from 'react-icons/im'
import ButtonNormal from 'src/ui-component/Button/ButtonNormal'
import CV from '../../../assets/cv/Nguyen Van Phat - ReactJS_Developer.pdf'
import { IoLogoFigma } from 'react-icons/io5'
import Logo from 'src/ui-component/Logo'
import { useRef } from 'react'
import { useIsInViewport } from 'src/hook/useIsInViewPort'
const Profile = () => {
  const targetAbout = useRef<HTMLDivElement>(null)
  const targetExperience = useRef<HTMLDivElement>(null)
  const targetEducation = useRef<HTMLDivElement>(null)
  const targetSkill = useRef<HTMLDivElement>(null)
  const targetProject = useRef<HTMLDivElement>(null)

  const handleClickToView = (ref: React.RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='max-w-[1200px] mx-auto max-xl:px-6 '>
      <div className='fixed top-0 left-0 right-0  mx-auto h-12 bg-white z-maximum shadow-xl '>
        <div className='flex justify-between max-w-[1200px] mx-auto pb-3  '>
          <div>
            <Logo />
          </div>
          <div>
            <ul className='flex gap-3 list-none cursor-pointer'>
              <li
                className={`hover:text-primary-700 ${useIsInViewport(targetAbout) && 'text-primary-700 font-semibold'} `}
                onClick={handleClickToView(targetAbout)}
              >
                About
              </li>
              <li
                className={`hover:text-primary-700 ${useIsInViewport(targetExperience) && 'text-primary-700 font-semibold'} `}
                onClick={handleClickToView(targetExperience)}
              >
                Experience
              </li>
              <li
                className={`hover:text-primary-700 ${useIsInViewport(targetEducation) && 'text-primary-700 font-semibold'} `}
                onClick={handleClickToView(targetEducation)}
              >
                Education
              </li>
              <li
                className={`hover:text-primary-700 ${useIsInViewport(targetSkill) && 'text-primary-700 font-semibold'} `}
                onClick={handleClickToView(targetSkill)}
              >
                Skill
              </li>
              <li
                className={`hover:text-primary-700 ${useIsInViewport(targetProject) && 'text-primary-700 font-semibold'} `}
                onClick={handleClickToView(targetProject)}
              >
                Projects
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div ref={targetAbout} className='grid grid-cols-12 pt-10'>
        <div className='col-span-6 max-xl:col-span-12'>
          <div className='flex flex-col items-center justify-center'>
            <Avatar sx={{ width: 260, height: 260 }} src={ImageAvatar} />
            <TypoDisplay text='Nguyen Van Phat' className='text-display-2xl' />
            <TypoText text='Web developer' className='text-xl pb-4 ' />
          </div>

          <TypoText
            className='text-md '
            text="I'm a web developer using ReactJs and Nodejs, I can perform coding individually as well as in a team. Have experience working as a developer,
             and have experience working with a Scrum team. I am willing to learn new technologies and adapt to new challenges. I would like to be a software architect developer in the future"
          />

          <div className='flex gap-2 bg-primary-200 p-2 rounded-md mt-3'>
            <DiNodejsSmall className='w-9 h-9 pb-2' />
            <TypoDisplay className='text-md flex-shrink-0' text='Back-end:' />
            <TypoText
              className='text-md'
              text='I am experienced in Javascript, TypeScript, ExpressJS, NestJS, DynamoDB, MySQL, MongoDB...etc on Node.JS platform'
            />
          </div>
          <div className='flex gap-2 bg-primary-200 p-2 rounded-md my-4'>
            <FaReact className='w-9 h-9 pb-2' />
            <TypoDisplay className=' flex-shrink-0 text-md' text='Front-end:' />
            <TypoText
              className='text-md'
              text='I am experienced in Javascript on ReactJS (NextJS, Redux, Axios, Antd, Tailwind, Mui, SCSS, Webpack, Vitest ,...etc)'
            />
          </div>

          <div>
            <TypoText className='text-md  underline ' text='My contact' />
            <div className='flex gap-4'>
              <Link target={'_blank'} to='https://github.com/vanphat304'>
                <ButtonIcon className='w-10 h-10' Icon={FaGithub} />
              </Link>
              <Link target={'_blank'} to='https://www.facebook.com/vanphat304/'>
                <ButtonIcon className='w-10 h-10' Icon={FaFacebook} />
              </Link>
              <Link target={'_blank'} to='https://www.linkedin.com/in/van-phat-nguyen-696b15251/'>
                <ButtonIcon className='w-10 h-10' Icon={FaLinkedin} />
              </Link>
              <ButtonIcon
                className='w-10 h-10'
                onClick={() => {
                  window.location.href = 'mailto:nguyenvanphat20999@gmail.com'
                }}
                Icon={BiLogoGmail}
              />
              <div className='flex items-center'>
                <ButtonIcon className='rotate-90' Icon={FaPhone} />
                <TypoText className='text-md font-semibold text-gray-400 ' text='0935864032' />
              </div>
            </div>
          </div>
          <div className='flex gap-4 mt-4'>
            <a target={'_blank'} href={CV} rel='noopener noreferrer'>
              <ButtonNormal startIcon={<FaRegAddressCard />} text='Download My CV' />
            </a>
            <ButtonNormal text='More info' variant='outlined' size='small' />
          </div>
        </div>
        <div className='col-span-6 max-xl:hidden  overflow-hidden'>
          <div className='overflow-hidden absolute right-0 w-1/2'>
            <div className='flex h-[800px] pl-24 rotate-12'>
              <div className='w-72 relative '>
                <img
                  className='animate-autScroll w-full absolute'
                  src='https://minimals.cc/assets/images/home/hero/light_1.webp'
                  alt=''
                />
                <img
                  className='animate-autScroll1 w-full absolute'
                  src='https://minimals.cc/assets/images/home/hero/light_1.webp'
                  alt=''
                />
              </div>
              <div className='flex-1 relative'>
                <img
                  className='animate-autoScrollNegative w-full absolute'
                  src='https://minimals.cc/assets/images/home/hero/light_1.webp'
                  alt=''
                />
                <img
                  className='animate-autoScrollNegative1 w-full absolute'
                  src='https://minimals.cc/assets/images/home/hero/light_1.webp'
                  alt=''
                />
              </div>
              {/* <img className=' w-72  animate-autoScrollNegative' src="https://minimals.cc/assets/images/home/hero/light_1.webp" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <div ref={targetExperience} className='mt-12 border-0 border-t border-solid border-t-gray-100 '>
        <TypoDisplay className='my-9 text-display-md ' text='EXPERIENCE' />
        <div className='grid grid-cols-12'>
          <div className='col-span-10 flex flex-col '>
            <Link to={'https://www.ttigroup.com/en'} target={'_blank'} className='no-underline'>
              <TypoDisplay
                className='text-xl !text-primary-700 hover:!text-yellow-400 hover:underline inline'
                variant='subtitle1'
                text='TECHTRONIC INDUSTRIES'
              />
            </Link>
            <TypoDisplay className='text-lg' text='Full Stack Developer' />

            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Responsibility' />
              </div>

              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='I work for the company as a web engineer, building a system to support engineers in converting machines used inindustrial production when new products are available and managing machines, fixtures, tools, etc. Keep savingtime for daily reports and, support for production and a platform for multiple teams in the factory to use to planproduction following current equipment'
              />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Technologies used' />
              </div>
              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='We use React, Typescript, Nodejs, Mysql, Github, Jira, and Windows server for product development.'
              />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Things achieved' />
              </div>
              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='How to manage server build, optimize queries, command execution strategy, optimize code time, decentralizationand system security, etc. Ability to communicate and work with end users, understand and solve their problems'
              />
              <br />
              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='Here I also have seminars to share technology and new features for the team to discuss and find the optimalsolutions for the products.'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <TypoText className='text-primary-600' text='02/2023-now' />
          </div>
        </div>
        <div className='grid grid-cols-12 my-8 '>
          <div className='col-span-10 flex flex-col '>
            <Link to={'https://carp.vn/'} target={'_blank'} className='no-underline'>
              <TypoDisplay
                className='text-xl !text-primary-700 hover:!text-yellow-400 hover:underline inline'
                variant='subtitle1'
                text='CARP TECH CORPORATION'
              />
            </Link>
            <TypoDisplay className='text-lg' text='Front-end Developer' />

            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Responsibility' />
              </div>

              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='
                work for the company as a web front-end engineer, I joined a project outsourcing for ACB bank a project for the vendor 
                of ACB bank, and budget for the projects they want to rent to do. I analyze documents and develop application functions.
                 The product that I specialize in is creating interfaces for login, vendor, system config,contract, project, import data, 
                 decentralizing users, fixing related bugs, building and deploying, and ensuring that alluser input is validated before submitting it to the Back-end
                '
              />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Technologies used' />
              </div>
              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='We use React, Javascript, C#, SQL Server, GitLab, Jira, and AWS for product development.'
              />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Things achieved' />
              </div>
              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text="How to use and optimize and custom library, how to organize a CRM project's source code, use custom hooks forlooping logic, advanced git, 
                custom react queries for caching and fetching, how is the system built, what is state management in a large project to use, how is client-side hierarchical, 
                communicate between team members andhow to raise problems and solve any problem."
              />
            </div>
          </div>
          <div className='col-span-2'>
            <TypoText className='text-primary-600' text='04/2022-2/2023' />
          </div>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-10 flex flex-col '>
            <Link to={'https://igap.vn/'} target={'_blank'} className='no-underline'>
              <TypoDisplay
                className='text-xl !text-primary-700 hover:!text-yellow-400 hover:underline inline'
                variant='subtitle1'
                text='IGAP'
              />
            </Link>
            <TypoDisplay className='text-lg' text='Front-end Developer' />

            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Responsibility' />
              </div>

              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='
                I joined the company as a front-end engineer specializing in creating interfaces for shipping orders, creating trips,splitting trips, and decentralizing users. I also have technology sessions here to improve performance and improvecode quality
                '
              />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Technologies used' />
              </div>
              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='We use React, Javascript, Java, Go, Mysql, Mongodb, Bitbucket, Slack, and Google Cloud for product development.'
              />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <FaBookmark className='text-yellow-400' />
                <TypoDisplay className='text-lg flex-shrink-0' text='Things achieved' />
              </div>
              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='Approach to learning new technologies, how to ask questions, and solve problems'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <TypoText className='text-primary-600' text='02/2022-04/2022' />
          </div>
        </div>
      </div>

      <div ref={targetEducation} className='mt-12 border-0 border-t border-solid border-t-gray-100 '>
        <TypoDisplay className='my-9 text-display-md ' text='EDUCATION' />
        <div className='grid grid-cols-12'>
          <div className='col-span-10 flex flex-col '>
            <Link to={'https://huit.edu.vn/'} target={'_blank'} className='no-underline'>
              <TypoDisplay
                className='text-xl !text-primary-700 hover:!text-yellow-400 hover:underline inline'
                variant='subtitle1'
                text='HCM UNIVERSITY OF INDUSTRY AND TRADE'
              />
            </Link>
            <TypoDisplay
              className='text-lg capitalize'
              text='
                    I gradated with a college degree of information system , but i developed my career as developer'
            />

            <div>
              <FaBookmark className='text-yellow-400' />

              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='
                My graduate thesis was granted 3.2/4, 2rd place in the talent and creative product competition of university.'
              />
            </div>
            <div>
              <FaBookmark className='text-yellow-400' />

              <TypoText
                className='text-lg inline '
                variant='subtitle1'
                text='
                After 4 years of college, I succeeded with graduate thesis on programming: NodeJS and Mysql'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <TypoText className='text-primary-600' text='08/2019 - 08/2023' />
          </div>
        </div>
      </div>

      <div ref={targetSkill} className='mt-28 pt-28 border-0 border-t border-solid border-t-gray-100 '>
        <TypoDisplay className=' text-display-md ' text='SKILLS' />
        <TypoDisplay className='text-md font-light capitalize' text='PROGRAMMING LANGUAGES & TOOLS' />
        <div>
          <ButtonIcon Icon={FaReact} />
          <ButtonIcon Icon={FaJsSquare} />
          <ButtonIcon Icon={SiTypescript} />
          <ButtonIcon Icon={SiMysql} />
          <ButtonIcon Icon={ImHtmlFive} />
          <ButtonIcon Icon={FaCss3Alt} />
          <ButtonIcon Icon={FaGithub} />
          <ButtonIcon Icon={FaDocker} />
          <ButtonIcon Icon={SiTailwindcss} />
          <ButtonIcon Icon={SiAntdesign} />
          <ButtonIcon Icon={SiMui} />
          <ButtonIcon Icon={SiWebpack} />
          <ButtonIcon Icon={SiVitest} />
          <ButtonIcon Icon={SiMongodb} />
          <ButtonIcon Icon={SiNestjs} />
          <ButtonIcon Icon={FaBootstrap} />
          <ButtonIcon Icon={SiJira} />
          <ButtonIcon Icon={IoLogoFigma} />
        </div>
      </div>

      <div ref={targetProject} className='mt-28 pt-28 h-[1000px] border-0 border-t border-solid border-t-gray-100 '>
        <TypoDisplay className=' text-display-md ' text='PROJECTS' />
        <div>
          <div className='flex item-center gap-2'>
            <FaTrophy className='text-yellow-400' />
            <p className='text-textPrimary m-0 font-light'>
              Fullstack develop a web app tool for "EMS" (Private Internal)
            </p>
          </div>
          <div className='flex item-center gap-2'>
            <FaTrophy className='text-yellow-400' />
            <p className='text-textPrimary m-0 font-light'>
              Front-End develop a web app for "Vendor management system" (Private Internal)
            </p>
          </div>
          <div className='flex item-center gap-2'>
            <FaTrophy className='text-yellow-400' />
            <p className='text-textPrimary m-0 font-light'>
              Front-End develop a web app for "Delivery management system " (Private Internal)
            </p>
          </div>
          <div className='flex item-center gap-2'>
            <FaTrophy className='text-yellow-400' />
            <p className='text-textPrimary m-0 font-light'>Building "Ecommerce website" (Project-Based Learning)</p>
          </div>
          <div className='flex item-center gap-2'>
            <FaTrophy className='text-yellow-400' />
            <p className='text-textPrimary m-0 font-light'>Building another project learn base </p>
          </div>

          <div className='flex item-center gap-2'>
            <FaTrophy className='text-yellow-400' />
            <p className='text-textPrimary m-0 font-light'>Design this "CV profile online"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
