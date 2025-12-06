import { TableActionsPrimary, TableActionsSecondary } from '@/types/shared';
import { Switch } from '@mui/material';
import { grey } from '@mui/material/colors';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiLike, BiSolidBookContent, BiUser } from 'react-icons/bi';
import { BsBuildings, BsEye, BsPerson } from 'react-icons/bs';
import { CgExtensionAdd, CgNotes } from 'react-icons/cg';
import { CiMobile4, CiRedo, CiSaveUp1, CiStar, CiTimer } from 'react-icons/ci';
import {
  FaClipboardList,
  FaRegAddressCard,
  FaRegBuilding,
  FaRegFolder,
  FaRegStar,
} from 'react-icons/fa';
import { FaListOl, FaRegCircleUser } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { GoUnlock } from 'react-icons/go';
import { GrFormView } from 'react-icons/gr';
import { HiOutlineCreditCard, HiOutlineRefresh } from 'react-icons/hi';
import { HiOutlineChartPie } from 'react-icons/hi';
import { ImAttachment } from 'react-icons/im';
import { IoIosGitNetwork } from 'react-icons/io';
import {
  IoCallOutline,
  IoCopyOutline,
  IoDocumentTextOutline,
} from 'react-icons/io5';
import {
  LiaFileInvoiceDollarSolid,
  LiaHandHoldingUsdSolid,
  LiaHandshake,
  LiaUserFriendsSolid,
} from 'react-icons/lia';
import { LuUser, LuUsers } from 'react-icons/lu';
import { LuClipboardList } from 'react-icons/lu';
import {
  MdCancelPresentation,
  MdContentCopy,
  MdDelete,
  MdDriveFolderUpload,
  MdOutlineBook,
  MdOutlineCalendarMonth,
  MdOutlineCancelPresentation,
  MdOutlineDiscount,
  MdOutlineEmail,
  MdOutlineLocalOffer,
  MdOutlineLockPerson,
  MdOutlinePayment,
  MdOutlinePlaylistAddCircle,
  MdOutlineRemoveRedEye,
  MdOutlineStarRate,
  MdWebAsset,
} from 'react-icons/md';
import { PiBuildingsLight } from 'react-icons/pi';
import {
  RiDeleteBin5Line,
  RiHome3Line,
  RiMoneyDollarBoxLine,
  RiNodeTree,
  RiShareLine,
} from 'react-icons/ri';
import {
  TbBrowser,
  TbBuildingEstate,
  TbClipboardData,
  TbClipboardList,
  TbCreditCard,
  TbDownload,
  TbEdit,
  TbFileDollar,
  TbListNumbers,
  TbLocation,
  TbLocationDollar,
  TbLockCheck,
  TbReport,
  TbReportAnalytics,
  TbReportMoney,
  TbRestore,
  TbSend,
  TbSendOff,
  TbShareOff,
  TbSquareCheck,
  TbSquareRoundedCheck,
  TbSquareRoundedX,
  TbStar,
  TbTagOff,
  TbTags,
  TbTimelineEventText,
} from 'react-icons/tb';
import { TiCreditCard, TiDocumentText } from 'react-icons/ti';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { WiTime8 } from 'react-icons/wi';

export const primaryVariants = {
  [TableActionsPrimary.view]: {
    icon: <MdOutlineRemoveRedEye />,
    color: undefined,
    sxColor: grey['600'],
    label: 'View',
  },
  [TableActionsPrimary.edit]: {
    icon: <TbEdit />,
    color: 'info',
    sxColor: undefined,
    label: 'Edit',
  },
  [TableActionsPrimary.share]: {
    icon: <RiShareLine />,
    color: 'success',
    sxColor: undefined,
    label: 'Share',
  },
  [TableActionsPrimary.publish]: {
    icon: <TbSend />,
    color: 'warning',
    sxColor: undefined,
    label: 'Publish',
  },
  [TableActionsPrimary.unshare]: {
    icon: <TbShareOff />,
    color: 'success',
    sxColor: undefined,
    label: 'Un Share',
  },
  [TableActionsPrimary.unpublish]: {
    icon: <TbSendOff />,
    color: 'warning',
    sxColor: undefined,
    label: 'Un Publish',
  },
  [TableActionsPrimary.download]: {
    icon: <TbDownload />,
    color: 'warning',
    sxColor: undefined,
    label: 'Download',
  },
  [TableActionsPrimary.delete]: {
    icon: <RiDeleteBin5Line />,
    color: 'error',
    sxColor: undefined,
    label: 'Delete',
  },
  [TableActionsPrimary.active]: {
    icon: <Switch />,
    color: 'info',
    sxColor: undefined,
    label: 'Active',
  },
};

export const SecondaryVariants = {
  [TableActionsSecondary.manageLicense]: {
    icon: <TiDocumentText />,
    label: 'Manage License',
  },
  [TableActionsSecondary.manageCertificate]: {
    icon: <TiDocumentText />,
    label: 'Manage Certificate',
  },
  [TableActionsSecondary.properties]: {
    icon: <TbListNumbers />,
    label: 'Listing Properties',
  },
  [TableActionsSecondary.plan]: {
    icon: <RiNodeTree />,
    label: 'Manage Plan',
  },
  [TableActionsSecondary.promotion]: {
    icon: <MdOutlineLocalOffer />,
    label: 'Promotions',
  },
  [TableActionsSecondary.gallery]: {
    icon: <MdOutlineBook />,
    label: 'Gallery',
  },
  [TableActionsSecondary.partener]: {
    icon: <LiaHandshake />,
    label: 'Partners',
  },
  [TableActionsSecondary.sponsers]: {
    icon: <RiMoneyDollarBoxLine />,
    label: 'Sponsers',
  },
  [TableActionsSecondary.exhibitors]: {
    icon: <FiUser />,
    label: 'Exhibitors',
  },
  [TableActionsSecondary.booth]: {
    icon: <IoDocumentTextOutline />,
    label: 'Booth Table',
  },
  [TableActionsSecondary.queries]: {
    icon: <FiUser />,
    label: 'Queries',
  },
  [TableActionsSecondary.documents]: {
    icon: <FaRegFolder />,
    label: 'Documents',
  },
  [TableActionsSecondary.mobileconfigs]: {
    icon: <CiMobile4 />,
    label: 'Mobile Configs',
  },
  [TableActionsSecondary.financial]: {
    icon: <TbLocationDollar />,
    label: 'Financial Provider',
  },
  [TableActionsSecondary.paymentPlans]: {
    icon: <TbLocationDollar />,
    label: 'Manage Payment Plans',
  },
  [TableActionsSecondary.rating]: {
    icon: <MdOutlineStarRate />,
    label: 'Rating',
  },
  [TableActionsSecondary.unblock]: {
    icon: <GoUnlock />,
    label: 'Unblock',
  },
  [TableActionsSecondary.internalShare]: {
    icon: <BiUser />,
    label: 'Internal Share',
  },
  [TableActionsSecondary.localShare]: {
    icon: <FaRegBuilding />,
    label: 'Local share',
  },
  [TableActionsSecondary.internationalShare]: {
    icon: <AiOutlineGlobal />,
    label: 'International Share',
  },
  [TableActionsSecondary.manageUnitType]: {
    icon: <RiNodeTree />,
    label: 'Manage Unit Types',
  },
  [TableActionsSecondary.manageUnit]: {
    icon: <PiBuildingsLight />,
    label: 'Units',
  },
  [TableActionsSecondary.restore]: {
    icon: <TbRestore />,
    label: 'Restore',
  },
  [TableActionsSecondary.socialMedia]: {
    icon: <BiLike />,
    label: 'Social Media',
  },
  [TableActionsSecondary.webPortal]: {
    icon: <MdWebAsset />,
    label: 'Web Portals',
  },
  [TableActionsSecondary.phases]: {
    icon: <BsBuildings />,
    label: 'phases',
  },
  [TableActionsSecondary.liveView]: {
    icon: <BsEye />,
    label: 'Live View',
  },
  [TableActionsSecondary.resetPassword]: {
    icon: <TbLockCheck />,
    label: 'Reset Password',
  },
  [TableActionsSecondary.packageAssignment]: {
    icon: <HiOutlineChartPie />,
    label: 'Package Assignment',
  },
  [TableActionsSecondary.setPermissions]: {
    icon: <FaRegAddressCard />,
    label: 'Set Permissions',
  },

  [TableActionsSecondary.selectTeamLead]: {
    icon: <LuUsers />,
    label: 'Select Team Lead',
  },
  [TableActionsSecondary.subscriptions]: {
    icon: <LiaFileInvoiceDollarSolid />,
    label: 'Subscriptions',
  },
  [TableActionsSecondary.viewInvoice]: {
    icon: <MdOutlineRemoveRedEye />,
    label: 'View Invoice',
  },
  [TableActionsSecondary.updatePayment]: {
    icon: <TbCreditCard />,
    label: 'Update Payment',
  },
  [TableActionsSecondary.paymentDetails]: {
    icon: <HiOutlineCreditCard />,
    label: 'Payment Details',
  },
  [TableActionsSecondary.overduePayments]: {
    icon: <TbFileDollar />,
    label: 'Over due Payments',
  },
  [TableActionsSecondary.viewContract]: {
    icon: <MdOutlineRemoveRedEye />,
    label: 'View Contract',
  },
  [TableActionsSecondary.downloadContract]: {
    icon: <TbDownload />,
    label: 'Download Contract',
  },
  [TableActionsSecondary.verifyFinance]: {
    icon: <TbSquareCheck />,
    label: 'Verify Finance',
  },
  [TableActionsSecondary.rejectRequest]: {
    icon: <TbSquareRoundedX />,
    label: 'Reject Request',
  },
  [TableActionsSecondary.reVerify]: {
    icon: <TbSquareCheck />,
    label: 'Re-Verify',
  },
  [TableActionsSecondary.approve]: {
    icon: <TbSquareCheck />,
    label: 'Approve',
  },
  [TableActionsSecondary.reject]: {
    icon: <TbSquareRoundedX />,
    label: 'Reject',
  },
  [TableActionsSecondary.manage]: {
    icon: <RiShareLine />,
    label: 'Manage',
  },
  [TableActionsSecondary.restoreDocuments]: {
    icon: <FaRegFolder />,
    label: 'Restore Documents',
  },
  [TableActionsSecondary.leadership]: {
    icon: <FaListOl />,
    label: 'Leadership',
  },
  [TableActionsSecondary.subCompanies]: {
    icon: <RiNodeTree />,
    label: 'Manage Sub Companies',
  },
  [TableActionsSecondary.viewDocuments]: {
    icon: <MdOutlineRemoveRedEye />,
    label: 'View Documents',
  },
  [TableActionsSecondary.manageSubscriptions]: {
    icon: <TbReportMoney />,
    label: 'Manage Subscriptions',
  },
  [TableActionsSecondary.subscription]: {
    icon: <TbFileDollar />,
    label: 'Subscriptions',
  },
  [TableActionsSecondary.viewLive]: {
    icon: <MdOutlineRemoveRedEye />,
    label: 'View Live',
  },
  [TableActionsSecondary.report]: {
    icon: <TbClipboardData />,
    label: 'Report',
  },
  [TableActionsSecondary.department]: {
    icon: <TbBuildingEstate />,
    label: 'Department',
  },
  [TableActionsSecondary.draft]: {
    icon: <LuClipboardList />,
    label: 'Draft',
  },
  [TableActionsSecondary.approveQuota]: {
    icon: <HiOutlineChartPie />,
    label: 'Approve Quota',
  },
  [TableActionsSecondary.makePayment]: {
    icon: <TbCreditCard />,
    label: 'Make Payment',
  },
  [TableActionsSecondary.viewCompanyProfile]: {
    icon: <MdOutlineRemoveRedEye />,
    label: 'View Company Profile',
  },
  [TableActionsSecondary.manageRoles]: {
    icon: <IoCopyOutline />,
    label: 'Manage Roles',
  },
  [TableActionsSecondary.inactive]: {
    icon: <WiTime8 />,
    label: 'Inactive',
  },
  [TableActionsSecondary.exclusive]: {
    icon: <TbSquareRoundedCheck />,
    label: 'Exclusive',
  },
  [TableActionsSecondary.duplicate]: {
    icon: <MdContentCopy />,
    label: 'Duplicate',
  },
  [TableActionsSecondary.accept]: {
    icon: <TbSquareRoundedCheck />,
    label: 'Accept',
  },
  [TableActionsSecondary.representative]: {
    icon: <IoIosGitNetwork />,
    label: 'Representative',
  },
  [TableActionsSecondary.call]: {
    icon: <IoCallOutline />,
    label: 'Call',
  },
  [TableActionsSecondary.reassignlead]: {
    icon: <LuUser />,
    label: 'Reassign Lead',
  },
  [TableActionsSecondary.convertToContact]: {
    icon: <LiaUserFriendsSolid />,
    label: 'Convert to Contact',
  },
  [TableActionsSecondary.attachements]: {
    icon: <ImAttachment />,
    label: 'Attachements',
  },
  [TableActionsSecondary.email]: {
    icon: <MdOutlineEmail />,
    label: 'Email',
  },
  [TableActionsSecondary.setAsJunk]: {
    icon: <RiDeleteBin5Line />,
    label: 'Set as Junk',
  },
  [TableActionsSecondary.notes]: {
    icon: <CgNotes />,
    label: 'Notes',
  },
  [TableActionsSecondary.activities]: {
    icon: <FaRegFolder />,
    label: 'Activities',
  },
  [TableActionsSecondary.composeEmail]: {
    icon: <MdOutlineEmail />,
    label: 'Compose Email',
  },
  [TableActionsSecondary.cancel]: {
    icon: <MdOutlineCancelPresentation />,
    label: 'Cancel',
  },
  [TableActionsSecondary.reschedule]: {
    icon: <MdOutlineCalendarMonth />,
    label: 'Reschedule',
  },
  [TableActionsSecondary.markAsCompleted]: {
    icon: <MdOutlineEmail />,
    label: 'Mark As Completed',
  },
  [TableActionsSecondary.verifyLegal]: {
    icon: <TbSquareCheck />,
    label: 'Verify Legal',
  },
  [TableActionsSecondary.rejectLegal]: {
    icon: <TbSquareRoundedX />,
    label: 'Reject Legal',
  },
  [TableActionsSecondary.subcategory]: {
    icon: <VscTypeHierarchySub />,
    label: 'Sub Category',
  },
  [TableActionsSecondary.xmlMapper]: {
    icon: <VscTypeHierarchySub />,
    label: 'XML Mapper',
  },
  [TableActionsSecondary.subAccount]: {
    icon: <FaRegFolder />,
    label: 'Sub Account',
  },
  [TableActionsSecondary.viewDeals]: {
    icon: <TbClipboardList />,
    label: 'View Deals',
  },
  [TableActionsSecondary.viewContact]: {
    icon: <TbClipboardList />,
    label: 'View Contacts',
  },
  [TableActionsSecondary.openActivities]: {
    icon: <FaRegFolder />,
    label: 'Open Activities',
  },
  [TableActionsSecondary.closeActivities]: {
    icon: <FaRegFolder />,
    label: 'Close Activities',
  },
  [TableActionsSecondary.exportPdf]: {
    icon: <IoDocumentTextOutline />,
    label: 'Export to pdf',
  },
  [TableActionsSecondary.sendEmail]: {
    icon: <MdOutlineEmail />,
    label: 'Send Email',
  },
  [TableActionsSecondary.updateRejection]: {
    icon: <TbSquareCheck />,
    label: 'Update Rejection',
  },
  [TableActionsSecondary.addOffer]: {
    icon: <MdOutlineDiscount />,
    label: 'Add Offer',
  },
  [TableActionsSecondary.subSocialAccount]: {
    icon: <FaRegCircleUser />,

    label: 'Sub Social Account',
  },
  [TableActionsSecondary.deletedSubAccounts]: {
    icon: <MdDelete />,
    label: 'Deleted Sub Accounts',
  },
  [TableActionsSecondary.verifyExclusive]: {
    icon: <TbSquareCheck />,
    label: 'Verify and Exclusive',
  },
  [TableActionsSecondary.bids]: {
    icon: <FaRegStar />,
    label: 'Bids',
  },
  [TableActionsSecondary.rooms]: {
    icon: <RiHome3Line />,
    label: 'Rooms',
  },
  [TableActionsSecondary.portals]: {
    icon: <TiCreditCard />,
    label: 'Portals',
  },
  [TableActionsSecondary.listingProject]: {
    icon: <TbListNumbers />,
    label: 'Listing Project',
  },
  [TableActionsSecondary.manageActivities]: {
    icon: <TbListNumbers />,
    label: 'Manage Activities',
  },
  [TableActionsSecondary.manageContent]: {
    icon: <BiSolidBookContent />,
    label: 'Manage Content',
  },
  [TableActionsSecondary.subInsights]: {
    icon: <TbBrowser />,
    label: 'Sub Insights',
  },
  [TableActionsSecondary.viewOrderDetails]: {
    icon: <GrFormView />,
    label: 'View Order Details',
  },
  [TableActionsSecondary.viewConsumedPlanPackage]: {
    icon: <GrFormView />,
    label: 'View Consumed plan package',
  },
  [TableActionsSecondary.serviceExpertise]: {
    icon: <TbStar />,
    label: 'Service Expertise',
  },
  [TableActionsSecondary.serviceLocation]: {
    icon: <TbLocation />,
    label: 'Service Location',
  },
  [TableActionsSecondary.autorefresh]: {
    icon: <HiOutlineRefresh />,
    label: 'Auto Refresh',
  },
  [TableActionsSecondary.detailedReport]: {
    icon: <TbReport />,
    label: 'Detailed Report',
  },
  [TableActionsSecondary.handler]: {
    icon: <BsPerson />,
    label: 'Handler',
  },
  [TableActionsSecondary.addTag]: {
    icon: <TbTags />,
    label: 'Add Tag',
  },
  [TableActionsSecondary.tag]: {
    icon: <TbTags />,
    label: 'Tag',
  },
  [TableActionsSecondary.removeTag]: {
    icon: <TbTagOff />,
    label: 'Remove Tag',
  },
  [TableActionsSecondary.setReminder]: {
    icon: <TbReport />,
    label: 'Set Reminder',
  },
  [TableActionsSecondary.showSimilarity]: {
    icon: <TbReport />,
    label: 'Show Simalarity',
  },
  [TableActionsSecondary.viewtimeline]: {
    icon: <TbTimelineEventText />,
    label: 'View Time Line',
  },
  [TableActionsSecondary.interestedListing]: {
    icon: <FaClipboardList />,
    label: 'Interested Listing',
  },
  [TableActionsSecondary.removeListing]: {
    icon: <MdOutlinePlaylistAddCircle />,
    label: 'Remove Listing',
  },
  [TableActionsSecondary.qadetails]: {
    icon: <TbReportAnalytics />,
    label: 'QA Details',
  },
  [TableActionsSecondary.listing]: {
    icon: <TbReportAnalytics />,
    label: 'Listing',
  },
  [TableActionsSecondary.regenerateApiKey]: {
    icon: <TbReportAnalytics />,
    label: 'Regenerate Api Key',
  },
  [TableActionsSecondary.revokeApiKey]: {
    icon: <TbReportAnalytics />,
    label: 'Revoke Api Key',
  },
  [TableActionsSecondary.applyRateLimits]: {
    icon: <TbReportAnalytics />,
    label: 'Apply Rate Limits',
  },
  [TableActionsSecondary.resetRateLimits]: {
    icon: <TbReportAnalytics />,
    label: 'Reset Rate Limit Counters',
  },
  [TableActionsSecondary.editApiKeyPermissions]: {
    icon: <TbReportAnalytics />,
    label: 'Edit Api Key Permissions',
  },
  [TableActionsSecondary.eventTypes]: {
    icon: <TbReportAnalytics />,
    label: 'Event Types',
  },
  [TableActionsSecondary.customHandler]: {
    icon: <TbReportAnalytics />,
    label: 'Custom Handler',
  },
  [TableActionsSecondary.unitVariations]: {
    icon: <TbReportAnalytics />,
    label: 'Unit Variation',
  },
  [TableActionsSecondary.reassign]: {
    icon: <CiRedo />,
    label: 'Reassign',
  },
  [TableActionsSecondary.managepayment]: {
    icon: <MdOutlinePayment />,
    label: 'Manage Payment',
  },
  [TableActionsSecondary.managetopup]: {
    icon: <CiSaveUp1 />,
    label: 'Manage Top-up',
  },
  [TableActionsSecondary.block]: {
    icon: <MdOutlineLockPerson />,
    label: 'Block',
  },
  [TableActionsSecondary.uploadcontract]: {
    icon: <MdDriveFolderUpload />,
    label: 'Upload Contract',
  },
  [TableActionsSecondary.cancelcontract]: {
    icon: <MdCancelPresentation />,
    label: 'Cancel Contract',
  },
  [TableActionsSecondary.holdsubscription]: {
    icon: <LiaHandHoldingUsdSolid />,
    label: 'Hold Subscription',
  },
  [TableActionsSecondary.extendsubscription]: {
    icon: <CgExtensionAdd />,
    label: 'Extend Subscription',
  },
  [TableActionsSecondary.createsubcontract]: {
    icon: <VscTypeHierarchySub />,
    label: 'Create Subcontract',
  },
  [TableActionsSecondary.manageroles]: {
    icon: <TbReportAnalytics />,
    label: 'Manage Roles',
  },
  [TableActionsSecondary.workhours]: {
    icon: <CiTimer />,
    label: 'Work Hours',
  },
  [TableActionsSecondary.facilities]: {
    icon: <CiStar />,
    label: 'Facilities',
  },
  [TableActionsSecondary.amenities]: {
    icon: <CiStar />,
    label: 'Amenities',
  },
};
