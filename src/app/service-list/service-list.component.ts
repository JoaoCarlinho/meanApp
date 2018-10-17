import { Component, OnInit } from '@angular/core';
import { ServicelistService } from '../services/servicelist.service';
import { ServicedetailService } from '../services/servicedetail.service';
import { HidepanelService } from '../services/hidepanel.service';
import { IOService } from '../ioservices/ioservices.component';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  visibility: boolean;//visibility of Sidebar
  detailVisibility: boolean;//visibility of service detail
  serviceLine: string; //selected service line from sidbar
  serviceShowing: IOService; //selected IOService
  getList: IOService[] = [{ "id": 1, "name": 'Basic Web Dev',
  "price": '$5000',
  "schedule": {
    "minimum delivery": '6 weeks',
    "Design" : '14 days',
    "Development" : '14 days',
    "Implementation/Confirmation" : '14 days',
  },
  "description": "Let one of ISE Optimizations' savvy Digital Marketing Specialists create an eye-catching web promotional application for your organization.  The standard application includes email marketing campaign management with newsletter registration buttons on the site, event promotion and registration, with up to 5 seperate pages of content.',//'Basic marketing site with newsletter and event registration(~5 page templates(Home, about, etc.)",
  "maintenance": 'Extended management and support $1000/mo.(1 monthly checkup, 4 design, development and testing hours - covers seasonal promotional updates and monthly updates to events pages)',
  "serviceType": 'Digital Services'
  },
  {
  "id": 2,
  "name": 'Basic E-Commerce Platform',
  "price": '$7500',
  "schedule": {
    "minimum delivery": '8 weeks',
    "Design" : '14 days',
    "Development" : '21 days',
    "Implementation/Confirmation" : '21 days',
  },
  "description": 'ISE Optimizations will provide your business the dual threat of a Digital Marketing Specialist to design an attractive, easy to navigate E-commerce site, in collaboration with one of our Business Process Management experts to deliver a back-office content-management portal to handle purchase and fulfillment for up to 3 non-cusotomizable product lines.  Email Marketing, newsletter registration, event promotion and registration included with up to 5 separate pages of content.',
  "maintenance": 'Extended management and support $1500/mo.(1 monthly checkup, 6 design, development and testing hours - covers seasonal promotional updates and monthly updates to events pages)',
  "serviceType": 'Digital Services'
  },
  {
  "id": 3,
  "name": 'Advanced E-Commerce Platform',
  "price": '$10000',
  "schedule": {
    "minimum delivery": '10 weeks',
    "Design" : '21 days',
    "Development" : '28 days',
    "Implementation/Confirmation" : '21 days',
  },
  "description": 'Get to know your customers so you can give them exactly what they want.  Our Data Modeling experts will provide a reporting dashboard delivering real-time data and easily customizable historic reports, so you can make decisions based on the metrics which matter to you. This will allow you to ensure the content on your E-commerce site is sending the correct message and ensure your operations teams are using the back-office content-management portal as efficiently and effectively as possible. Up to 5 non-customizable product lines come standard.',
  "maintenance": 'Extended management and support $2000/mo.(2 monthly checkups, 8 design, development and testing hours - covers seasonal promotional updates and monthly updates to events pages)',
  "serviceType": 'Digital Services'
  },
  {
  "id": 4,
  "name": 'Enterprise Customer Relationship Management Platform',
  "price": '$15000',
  "schedule": {
    "minimum delivery": '12 weeks',
    "Design" : '21 days',
    "Development" : '35 days',
    "Implementation/Confirmation" : '28 days',
  },
  "description": 'Gain a competitive edge with the ability to engage site visitors and ensure they fulfill their shopping goals with our customizable chat experience.  Not only will your reporting dashboard provide information on how customers are using your site, but also how each one-on-one interaction with site visitors is contributing to the bottom line.  The added ability for fulfillment personnel to see notes from chat conversations on the back-office management system will greatly improve order accuracy and customer satisfaction.  E-commerce  site with back-office content-management portal and reporting dashboard delivering real-time data. Up to 8 product lines come standard. ( includes 2 customizable options)',
  "maintenance": 'Extended management and support $2500/mo.(2 monthly checkups,  1 monthly interaction review, 10 design, development and testing hours - covers seasonal promotional updates and monthly updates to events pages)',
  "serviceType": 'Digital Services'
  },
  {
  "id": 5,
  "name": 'Customer Interaction Tag',
  "price": '$7500 + engagement bonus',
  "schedule": {
    "minimum delivery": '6 weeks',
    "Design" : '14 days',
    "Development" : '14 days',
    "Implementation/Confirmation" : '14 days',
  },
  "description": 'Already have an Ecommerce site? Let ISE Optimizations connect you with our seasoned Business Process Management experts upgrade your site with the ability to engage customers by integrating our real-time chat experience.  Customers will really appreciate the opportunity to connect with the folks inside your organization, and in turn you will celebrate increasesing sales and customer satisfaction.  Not only will your reporting dashboard provide information on how customers are using your site, but also how each one-on-one interaction with site visitors is contributing to the bottom line.  The added ability for fulfillment personnel to see notes from chat conversations on the back-office management system will greatly improve order accuracy and customer satisfaction.',
  "maintenance": 'Extended management and support $1000/mo.(1 monthly checkup, 1 monthly interaction review, 2 design, development and testing hours - covers seasonal/promotional updates)',
  "serviceType": 'Digital Services'
  },
  {
  "id": 6,
  "name": 'Market Consulting',
  "price": '$75/hr. + performance bonus ~$36,000/12 weeks',
  "schedule": {
    "minimum delivery": '12 weeks',
    "Research/Planning" : '21 days',
    "Development" : '28 days',
    "Implementation/Confirmation" : '35 days',
  },
  "description": "Let one of ISE Optimizations' savvy Digital Marketing Specialists setup digital ad channels such as google ad-words, social media platforms based on industry performance, while also taking your campaign to the streets with comprehensive print resources.  Our experts will really get to know your business and your customers in order to keep your customers hooked on your brand with well-timed promotions as well as referral incentive programs.",
  "maintenance": 'Extended management and support $1000/mo.(2 monthly checkups, 6 planning/implementation hours) -covers(seasonal promotional updates and event planning)',
  "serviceType": 'Consulting Services'
  },
  {
  "id": 7,
  "name": 'Business Process Improvement',
  "price": '$100/hr. + performance bonus ~$48,000/12 weeks',
  "schedule": {
    "minimum delivery": '12 weeks',
    "Research/Planning" : '21 days',
    "Development" : '28 days',
    "Implementation/Confirmation" : '35 days',
  },
  "description": "ISE Optimizations will let one of our resources take residence within your organization to get a deep understanding of its' culture and uncover sources of waste. Whether it require adjustment of current business processes, integration of advanced software tools, improving efficiency, reducing overhead and moving your organizationto the leading edge of your industry is what our experts do in their sleep.",
  "maintenance": 'Extended management and support $1000/mo.(2 monthly checkups, 6 planning/implementation hours) -covers(continued coaching and metrics review)',
  "serviceType": 'Consulting Services'
  },
  {
  "id": 8,
  "name": 'IT Systems integration',
  "price": '$100/hr. ~$48,000/12 weeks',
  "schedule": {
    "minimum delivery": '12 weeks',
    "Research/Planning" : '21 days',
    "Development" : '28 days',
    "Implementation/Confirmation" : '35 days',
  },
  "description": 'We at ISE Optimizations take pride in being well-versed in the latest advancements in technology.  We will send one of our expert Technology Managers to assess the current state of technology within your organization.  We will simplify data management with cloud integrations and increase security of data systems on distributed or internal network solutions',
  "maintenance": 'Extended management and support $1000/mo.(2 monthly checkups, 6 planning/implementation hours) -covers(continued security review and on-going support)',
  "serviceType": 'Technology Services'
  },
  {
  "id": 9,
  "name": 'Database Architecture',
  "price": '$100/hr. ~$48,000/12 weeks',
  "schedule": {
    "minimum delivery": '8 weeks',
    "Design" : '21 days',
    "Development" : '21 days',
    "Implementation/Confirmation" : '14 days',
  },
  "description": 'ISE Optimizations employs data modeling experts with experience solutioning for a wide range of industries. Our experts will ensure your organization is equipped with the right hardware  or cloud solution to support the flow of information required for ongoing interactions within your organization as well as client-facing portals, operations reporting, safekeeping of historic data, or simply organization of disparate sources of information',
  "maintenance": 'Extended management and support $1000/mo.(2 monthly checkup, 4 design, development and testing hours - covers(continued security review and on-going support)',
  "serviceType": 'Technology Services'
  },
  {
  "id": 10,
  "name": 'Project Management',
  "price": '$125/hr. ~$60,000/12 weeks',
  "schedule": {
    "minimum delivery": '12 weeks',
    "Design" : '28 days',
    "Development" : '28 days',
    "Implementation/Confirmation" : '28 days',
  },
  "description": "Acquire one of ISE Optimizations' masterful Project Management resrourses as on a full-time basis while your organization transitions through Business Development, IT systems integration, Data Warehousing or resource planning projects.  Our Project managers will ensure delivery is on-time and under-budget while constantly assessing the proposed implementation to close gaps and eliminate sources of waste",
  "maintenance": 'Contracts can be renewed based on need.  Project resources will not receive new assignments more than 1 month before contract end date',
  "serviceType": 'Operations Support'
  },
  {
  "id": 11,
  "name": 'Tech Support Specialist',
  "price": '$75/hr. ~$36,000/12 weeks',
  "schedule": {
    "minimum delivery": '12 weeks',
    "Review" : '14 days',
    "Planning/Issue Tracking" : '35 days',
    "Implementation/Confirmation" : '35 days',
  },
  "description": 'Need and Easy Button?, ISE Optimizations provides the closest thing to it with technology enthusiasts to amaze even the most veteran resources on the Geek Squad.  Our tech specialists ensure your systems stay up and running, while funcitoning at the most efficient level by trouble-shooting and conducting workflow analysis.  Ensure the security of sensitive information as well as adherence to compliance standards through User Access Administration.  Leadership might even be in for a pleasant surprise and learn some things about your organization that even the most experienced leaders may not notice  by providing support to Data analytics efforts',
  "maintenance": 'Contracts can be renewed based on need.  Project resources will not receive new assignments more than 1 month before contract end date',
  "serviceType": 'Operations Support'
  },
  {
  "id": 12,
  "name": 'Quality Assurance/Testing resource',
  "price": '$75/hr. ~$36,000/12 weeks',
  "schedule": {
    "minimum delivery": '12 weeks',
    "Review" : '14 days',
    "Test/Development" : '35 days',
    "Implementation/Confirmation" : '35 days',
  },
  "description": "Ensure your system operates flawlessly, end-to-end by acquiring one of ISE Optimization prolific QA Engineers.  Developing automated tests for new technology implementation as well as safeguards for current processes will ensure risk is mitigated, time-to-production is reduced and the need pay resources to spend time manually testing small pieces of processes by implementation of a continous integratoin pipeline",
  "maintenance": 'Contracts can be renewed based on need.  Project resources will not receive new assignments more than 1 month before contract end date',
  "serviceType": 'Operations Support'
  }];;

  constructor(private info: ServicelistService, private detail: ServicedetailService, private data: HidepanelService) { }

  ngOnInit() {
    //set current visibility of sidebar
    this.data.currentMessage.subscribe(visibility => this.visibility = visibility)
    //set current service line
    this.info.currentLine.subscribe(line => this.serviceLine = line)
    //import service list from API
    //this.info.loadServiceLines().then(res => this.getList = res)
    
    //set current service for detail
    this.detail.currentService.subscribe(ioservice => this.serviceShowing = ioservice)
    //set current visibility of service detail
    this.detail.detailVisibility.subscribe(detailVisibility => this.detailVisibility = detailVisibility)
  }

  ShowService(ioservice: IOService){
    this.serviceShowing = ioservice;
    this.detail.ShowService(this.serviceShowing);
    console.log(this.serviceShowing);
  }

  UpdateVisibility(){
    this.visibility = false;
    this.data.ShowHidePanel(this.visibility);
    //console.log ('visiblity:'+this.visibility);
  }

  ShowDetail(){
    this.detailVisibility = true;
    this.detail.ShowDetail(this.detailVisibility);
    //console.log('detail visible = '+this.detailVisibility);
  }

}
