'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

export const MenuIcon: React.FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5543 7.23311H24.221C24.5923 7.23311 24.9484 7.08561 25.2109 6.82305C25.4735 6.5605 25.621 6.20441 25.621 5.83311C25.621 5.4618 25.4735 5.10571 25.2109 4.84316C24.9484 4.58061 24.5923 4.43311 24.221 4.43311H5.5543C5.18299 4.43311 4.8269 4.58061 4.56435 4.84316C4.3018 5.10571 4.1543 5.4618 4.1543 5.83311C4.1543 6.20441 4.3018 6.5605 4.56435 6.82305C4.8269 7.08561 5.18299 7.23311 5.5543 7.23311ZM24.221 12.5998H5.5543C5.18299 12.5998 4.8269 12.7473 4.56435 13.0098C4.3018 13.2724 4.1543 13.6285 4.1543 13.9998C4.1543 14.3711 4.3018 14.7272 4.56435 14.9897C4.8269 15.2523 5.18299 15.3998 5.5543 15.3998H24.221C24.5923 15.3998 24.9484 15.2523 25.2109 14.9897C25.4735 14.7272 25.621 14.3711 25.621 13.9998C25.621 13.6285 25.4735 13.2724 25.2109 13.0098C24.9484 12.7473 24.5923 12.5998 24.221 12.5998ZM24.221 20.7664H5.5543C5.37045 20.7664 5.1884 20.8027 5.01854 20.873C4.84868 20.9434 4.69435 21.0465 4.56435 21.1765C4.43435 21.3065 4.33122 21.4608 4.26087 21.6307C4.19051 21.8005 4.1543 21.9826 4.1543 22.1664C4.1543 22.3503 4.19051 22.5323 4.26087 22.7022C4.33122 22.8721 4.43435 23.0264 4.56435 23.1564C4.69435 23.2864 4.84868 23.3895 5.01854 23.4599C5.1884 23.5302 5.37045 23.5664 5.5543 23.5664H24.221C24.4048 23.5664 24.5869 23.5302 24.7567 23.4599C24.9266 23.3895 25.0809 23.2864 25.2109 23.1564C25.3409 23.0264 25.444 22.8721 25.5144 22.7022C25.5848 22.5323 25.621 22.3503 25.621 22.1664C25.621 21.9826 25.5848 21.8005 25.5144 21.6307C25.444 21.4608 25.3409 21.3065 25.2109 21.1765C25.0809 21.0465 24.9266 20.9434 24.7567 20.873C24.5869 20.8027 24.4048 20.7664 24.221 20.7664Z"
        fill={pathname.startsWith('/menu') ? '#009BFF' : '#8B95A1'}
      />
    </svg>
  )
}

export const HomeIcon: React.FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.8306 9.57125L14.9758 1.73475C14.7696 1.57044 14.5137 1.48096 14.2501 1.48096C13.9865 1.48096 13.7306 1.57044 13.5244 1.73475L3.66843 9.57125C3.39374 9.78974 3.17188 10.0674 3.01937 10.3835C2.86686 10.6996 2.78764 11.0461 2.7876 11.3971V22.3848C2.7876 23.1274 3.0826 23.8395 3.6077 24.3647C4.1328 24.8898 4.84499 25.1848 5.5876 25.1848H11.9168V19.6408C11.9168 19.3313 12.0397 19.0346 12.2585 18.8158C12.4773 18.597 12.774 18.4741 13.0834 18.4741H15.4168C15.7262 18.4741 16.0229 18.597 16.2417 18.8158C16.4605 19.0346 16.5834 19.3313 16.5834 19.6408V25.1848H22.9114C23.654 25.1848 24.3662 24.8898 24.8913 24.3647C25.4164 23.8395 25.7114 23.1274 25.7114 22.3848V11.3983C25.7114 11.0473 25.6322 10.7008 25.4797 10.3847C25.3271 10.0686 25.1053 9.79091 24.8306 9.57242"
        fill={pathname === '/' ? '#009BFF' : '#8B95A1'}
      />
    </svg>
  )
}

export const RelayIcon: React.FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.77633 22.9201C4.85392 22.3344 4.93151 21.7651 5.02462 21.1794C5.05815 20.9861 5.09055 20.7916 5.12303 20.5966C5.21083 20.0694 5.2993 19.5383 5.41257 19.0158C5.50763 18.53 5.63 18.0537 5.75179 17.5796L5.75185 17.5794C5.78908 17.4344 5.82626 17.2897 5.86259 17.145C5.9557 16.7871 5.89363 16.4455 5.62982 16.2015C5.44683 16.0298 5.25189 15.877 5.05612 15.7235L5.0561 15.7235L5.05609 15.7235C4.93644 15.6297 4.81647 15.5356 4.69874 15.4369C3.51938 14.4445 2.4176 13.3709 1.48652 12.1182C1.29532 11.8561 1.17382 11.5209 1.05595 11.1958L1.05595 11.1958L1.0365 11.1422C0.927874 10.8331 1.06754 10.5077 1.3779 10.4264L1.37792 10.4264C2.04518 10.2474 2.71245 10.0685 3.39523 9.97087C4.11483 9.86499 4.83444 9.80218 5.5624 9.73865L5.56253 9.73863C5.72933 9.72408 5.89656 9.70948 6.06432 9.69432C6.41606 9.66178 6.7678 9.64371 7.11954 9.62563C7.29541 9.61659 7.47128 9.60756 7.64716 9.59671C7.98855 9.58044 8.15925 9.38523 8.29891 9.05987L8.29893 9.05983C8.84205 7.70961 9.38518 6.35939 9.97486 5.04171C10.2387 4.45607 10.5956 3.91923 10.9525 3.41493C11.3404 2.86182 11.837 2.87809 12.3336 3.36612C12.6284 3.64268 12.8767 4.00057 13.0785 4.35846C13.8544 5.74123 14.3509 7.23787 14.8475 8.75078C14.8785 8.83212 14.9096 8.91346 14.9251 8.9948C15.0337 9.4503 15.3441 9.58044 15.7631 9.62925C17.3459 9.80819 18.9442 10.0034 20.5271 10.2149C20.9246 10.2724 21.3099 10.3933 21.6832 10.5104L21.8306 10.5565C22.172 10.6541 22.2961 10.9144 22.1875 11.2723C22.0478 11.7929 21.7375 12.1996 21.3961 12.59C20.3564 13.8264 19.177 14.9163 17.9201 15.9086C17.7959 16.0062 17.6563 16.1201 17.5476 16.234C17.3459 16.4617 17.2838 16.7058 17.3614 17.0311C17.7183 18.5766 18.0597 20.122 18.3701 21.6675C18.4726 22.1914 18.5222 22.7374 18.5713 23.2782C18.5817 23.3923 18.592 23.5062 18.6029 23.6196C18.6339 23.945 18.4942 24.0426 18.1683 24.0263C17.3769 23.9612 16.6631 23.6196 15.9803 23.2454C14.6613 22.5459 13.3733 21.7813 12.1008 21.0167C11.7594 20.8215 11.4801 20.8053 11.1697 21.0167C9.44724 22.123 7.63164 23.0177 5.75397 23.7823C5.69189 23.8148 5.6143 23.8474 5.55223 23.8474C4.99358 23.8962 4.91599 23.7985 4.8384 23.2617C4.82806 23.1858 4.83151 23.1099 4.83496 23.034C4.83668 22.996 4.8384 22.958 4.8384 22.9201H4.80737H4.77633ZM29 24.3663L29 24.3792C28.9953 24.3575 28.9907 24.3268 28.9853 24.2909C28.9776 24.24 28.9683 24.1785 28.9552 24.117C28.5411 21.7283 27.9032 19.4315 26.8288 17.3184C26.202 16.0978 25.4857 14.9691 24.5456 14.0635C24.333 13.8667 24.098 13.7092 23.8517 13.5779C23.5943 13.4467 23.4152 13.5517 23.2809 13.8273C22.9004 14.6279 22.3968 15.3104 21.7924 15.901C21.7509 15.9416 21.7082 15.9822 21.6652 16.0232L21.6652 16.0232C21.5691 16.1147 21.4711 16.2082 21.3783 16.3078C21.2328 16.4653 21.244 16.5835 21.4007 16.7147C21.5126 16.7935 21.6357 16.8722 21.7588 16.9247C21.8645 16.9676 21.9717 17.0088 22.0793 17.0501L22.0793 17.0501C22.2679 17.1226 22.4577 17.1955 22.643 17.2791C23.9525 17.8697 25.0157 18.8803 25.9446 20.0877C26.9071 21.3477 27.6905 22.7389 28.0711 24.3926C28.0823 24.4845 28.1158 24.5895 28.1606 24.6682C28.2837 24.9176 28.5299 25.0488 28.7202 24.9832C28.897 24.9184 28.9974 24.7129 29 24.3792L29 24.3795V24.3663ZM20.3796 19.9701C20.4604 20.4546 20.5413 20.9392 20.5605 21.4238H20.5726V21.6684C20.5605 21.913 20.6207 21.9945 20.8734 22.0411C20.8991 22.0452 20.9233 22.0509 20.947 22.0564C20.9899 22.0664 21.0314 22.076 21.0779 22.076C22.3292 22.2624 23.4963 22.6584 24.5189 23.4039C24.9952 23.7454 25.4456 24.112 25.8986 24.4806C26.0636 24.6149 26.2289 24.7495 26.3959 24.8832C26.6365 25.0812 26.9012 25.0229 27.0215 24.7434C27.0937 24.5803 27.0817 24.4289 26.9975 24.2775C26.9263 24.1549 26.8577 24.0324 26.7896 23.9107C26.6504 23.6622 26.5132 23.4171 26.3598 23.1826C25.3371 21.5985 24.0016 20.3405 22.2089 19.595C21.6915 19.3854 21.1621 19.2223 20.5966 19.2689C20.344 19.2922 20.2838 19.3621 20.3199 19.6067C20.3391 19.7278 20.3594 19.849 20.3796 19.9701Z"
        fill={pathname.startsWith('/relay') && !pathname.includes('dashboard') ? '#009BFF' : '#8B95A1'}
      />
    </svg>
  )
}

export const UserIcon: React.FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.9515 5.75127C17.9516 6.50122 17.804 7.24385 17.517 7.93675C17.2301 8.62965 16.8095 9.25925 16.2793 9.78961C15.749 10.32 15.1195 10.7407 14.4267 11.0277C13.7338 11.3148 12.9912 11.4626 12.2413 11.4627C10.7267 11.4628 9.27405 10.8613 8.20295 9.79043C7.13185 8.71955 6.53003 7.26704 6.52987 5.75243C6.52979 5.00248 6.67743 4.25985 6.96436 3.56695C7.25129 2.87405 7.67188 2.24445 8.20212 1.71409C9.273 0.642994 10.7255 0.0411704 12.2401 0.0410157C13.7547 0.0408609 15.2074 0.642388 16.2785 1.71327C17.3496 2.78415 17.9514 4.23666 17.9515 5.75127ZM12.2407 13.2098C4.01687 13.2098 0.817871 18.4434 0.817871 20.8783C0.817871 23.3119 7.6277 23.9606 12.2407 23.9606C16.8537 23.9606 23.6635 23.3119 23.6635 20.8783C23.6635 18.4434 20.4645 13.2098 12.2407 13.2098Z"
        fill={pathname.includes('dashboard') ? '#009BFF' : '#8B95A1'}
      />
    </svg>
  )
}

export const Tabbar: React.FC = () => {
  const pathname = usePathname()

  if (pathname.startsWith('/detail/')) {
    return (
      <>
        <div className="flex w-full h-[100px]" />

        <nav className="fixed left-0 right-0 bottom-0 flex justify-around items-center pt-3 pb-[32px] px-2 border-t bg-white gap-2">
          <Link className="flex-1 h-[44px]" href="/menu">
            <Button className="hover:opacity-65 transition-opacity text-base w-full h-[44px] !text-[#346AFF] !bg-white border border-[#5985FF]">
              장바구니 담기
            </Button>
          </Link>
          <Link className="flex-1 h-[44px]" href="/">
            <Button className="hover:opacity-65 transition-opacity text-base w-full h-[44px] !bg-[#346AFF] !text-white">
              바로구매
            </Button>
          </Link>
        </nav>
      </>
    )
  }
  return (
    <>
      {/* bottom padding >= as tabbar height */}
      {!pathname.startsWith('/relay/') && <div className="flex w-full h-[50px]" />}{' '}
      <nav className="fixed left-0 right-0 bottom-0 flex justify-around items-center p-4 border-t bg-white">
        <Link href="/#">
          <MenuIcon pathname={pathname} />
        </Link>
        <Link href="/">
          <HomeIcon pathname={pathname} />
        </Link>
        <Link href="/relay/1">
          <RelayIcon pathname={pathname} />
        </Link>
        <Link href="/relay/dashboard">
          <UserIcon pathname={pathname} />
        </Link>
      </nav>
    </>
  )
}
