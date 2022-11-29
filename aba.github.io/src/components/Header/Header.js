import { Navbar, Link, Text } from '@nextui-org/react';
// import { Layout } from './Layout.js';

export default function Header() {
  const items = [
    {value:'Home', href:"/"},
    {value:'Auction', href:"/auction"},
    {value:'Teams', href:"/teams"},
    {value:'Games', href:'/games'},
    {value:'Highlights', href:'/highlights'},
    {value:'Sponsors', href:"/sponsors"},
    {value:'Archive', href:"/archive"},
    {value:'Court Booking', href:'/court-booking'}
  ];

  var active = window.location.pathname;
  // console.log(active);
  // console.log(active.substring(0,items[2].href.length+1))

  return (
    // <Layout>
    <Navbar
      isBordered
      // variant="sticky"
    >
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        {/* <AcmeLogo /> */}
        <Text b color="inherit" hideIn="xs">
          ABA 6.0
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
       {items.map((item, index) => (
          <Navbar.Link
            key={item}
            isActive={item.href===active.substring(0,item.href.length+1)}
            href={item.href}
          >
              {item.value}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content
        css={{
          '@xs': {
            w: '12%',
            jc: 'flex-end',
          },
        }}
      >
      </Navbar.Content>
      <Navbar.Collapse>
        {items.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            isActive={item.href===active.substring(0,item.href.length+1)}
          >
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href={item.href}
            >
              {item.value}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
    // </Layout>
  );
}
