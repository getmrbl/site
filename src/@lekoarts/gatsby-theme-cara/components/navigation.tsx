/** @jsx jsx */
import { jsx, Box, Flex, NavLink, Button } from 'theme-ui'

export default (props) => (
<Flex as="nav" sx={{justifyContent: 'space-between'}}>
  <Flex sx={{ alignItems: 'center' }}>
    <div>
      <NavLink href="/" sx={{ p: '2', display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '2'}}>
        {/* <Logo sx={{ minWidth: 40 }}/> MRBL */} MRBL
      </NavLink>
    </div>
    <NavLink href="/roadmap" p={2}>
      Roadmap
    </NavLink>
    <NavLink href="/whitepaper" p={2}>
      Whitepaper
    </NavLink>
    <NavLink href="/blog" p={2}>
      Blog
    </NavLink>
  </Flex>
  <Box sx={{ display: 'flex', placeItems: 'center' }}>
    <Button py={1}>Connect Wallet</Button>
  </Box>
</Flex>
)