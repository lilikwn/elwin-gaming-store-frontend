import OverviewContent from '@/components/organism/OverviewContent/OverviewContent'
import SidebarOverview from '@/components/organism/SidebarOverview/SidebarOverview'
import React from 'react'

function MemberOverview() {
  return (
    // <!-- Overview -->
    <section className="overview overflow-auto">
        <SidebarOverview />
        <OverviewContent />
    </section>
  )
}

export default MemberOverview