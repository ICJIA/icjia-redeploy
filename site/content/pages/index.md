---
is_hidden: false
title: Adult Redeploy Illinois Home
nav_title: Home
splash: /assets/img/ari-splash-04.jpg
short_description: |
  The Targeted Violence Prevention Program makes outside research on targeted violence prevention and countering
  violent extremism more accessible to community-based and faith-based organizations. TVPP can also partner with
  community-level efforts to conduct research on current and new targeted violence prevention programs.
display_nav: 'Yes'
template: home/index
fieldset: home
id: db0ae4e3-4f10-4802-bc40-0b880cbf02c7
---

<style>
  .bootstrap-select {
    font-family: 'Lato', sans-serif;
    font-weight: 900 !important;
    font-size: 18px !important;
}
.bootstrap-select.btn-group .dropdown-menu {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    font-weight: 700 !important;
}
.factsheet {display: none}

.nav>li {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
}
.nav>li>a {
    position: relative;
    display: block;
    padding: 10px 15px;
    color: #aaa;
}

.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #068587;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
}

.tab-pane {padding: 30px 10px 30px 10px}

.tab-panel {padding-right: 25px}



</style>

<!-- Splash image -->
<div class="homeHero hidden-sm hidden-xs" {{if get:splash}}style="background-image: url('/assets/img/ari-splash-0{{get:splash}}.jpg');"{{else}}style="background-image: url({{splash}});"{{/if}}>
  <div class="homeHeader">
    <h3> Adult Redeploy Illinois</h3>
    <h4> Diverting non-violent offenders from prison to more effective and less expensive
community-based supervision and services</h4>
  </div>
</div>

<div style="background: #eee" class="homeHero mobile hidden-md hidden-lg">
  <div class="text-center">
    <h3> Adult Rededeploy Illinois</h3>
    <h4> Diverting non-violent offenders from prison to more effective and less expensive
community-based supervision and services</h4>
  </div>
</div> 

<!-- hoverBoxes -->
<div class="container-fluid fullscreen hidden-xs hidden-sm">

<div class="row is-flex">

  <div class="col-sm-12 col-md-4 col-lg-4 hoverBox">
        <a href="/our-approach">
          <div class="service-inner">
            <h6 class="entry-title">Key Components</h6>
            <ul style="text-align: left">
    <li>Assessment of risk, needs and assets</li>
    <li>Evidence-based and promising practices</li>
    <li>Performance measurement and evaluation</li>
    <li>Annual report to Governor and General Assembly</li>
</ul>
          </div>
        </a>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 hoverBox">
        <a href="/research">
          <div class="service-inner">

  <h6 class="entry-title">Local Programs</h6>
            <ul style="text-align: left">
    <li>27 Problem-solving courts
        <ul>
            <li>22 Drug courts</li>
            <li>5 Mental health courts (2 with veteran treatment track)</li>
        </ul>
    </li>
    <li>12 Intensive supervision probatio with services programs (1 HOPE probation)</li>
</ul>
          </div>
        </a>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 hoverBox">
        <a href="/resources">
          <div class="service-inner">

   <h6 class="entry-title">Results</h6>
            <ul style="text-align: left">
    <li>Reduced prison over-crowding</li>
    <li>Lower costs to taxpayers</li>
    <li>End to the expensive and vicious cycle of crime and incarceration</li>
</ul>
          </div>
        </a>
      </div>
    
  
</div>
</div> 


<!-- About / Map -->

<div class="container" style="background: #fff; padding-top: 50px; padding-bottom: 50px">

  <div class="row is-flex welcome-photo">
    
 
  <div class="col-md-5">

      <div>
      <img src="/assets/img/ARI2017map.png" style="" width="400" alt="Adult Redeploy Illinois SFY2017 Sites" class="img-responsive">
      </div>

      





      
     
    </div>


  <div class="col-md-7">
  <div class="text-center" >
      <div style="color: #aaa; font-family: 'Lato', sans-serif; font-weight: 900; margin-bottom: 15px;">Display ARI Fact Sheet</div>



      <select class="selectpicker" style="font-size: 14px; font-family: 'Lato', sans-serif !important" title="Choose one of the following...">
  <optgroup label="Adult Redeploy Illinois Sites" style="font-family: 'Lato', sans-serif !important;">
  {{ collection:sites }}
   <option value="{{url}}"><a href="{{url}}">{{title}}</a></option>
{{ /collection:sites }}
    
    
  </optgroup>
  
</select>

</div>
<div class="local-program-description well" style="margin-top: 60px; font-family: 'Lato' ,sans-serif">
<p>As of June 2017, Adult Redeploy Illinois has <strong>20 local sites</strong> operating <strong>39 diversion programs</strong> serving <strong>39 counties</strong>. </p><p>Additionally, ARI funds planning in areas covering <strong>10 additional counties</strong>.</p>

</div>
  <div class="factsheet panel panel-default" style="margin-top: 40px; font-size: 16px;">
  <div class="panel-heading">
    <h3 class="panel-title" style="text-transform: uppercase">Site Description</h3>
  </div>
  <div class="panel-body">
    
<div class="text-center">Loading ...</div>


  </div>
</div>
</div>


  </div>

</div>

<section style="background: #eee; border-top: 1px solid #aaa;">
<div class="container-fluid" style=" padding-top: 50px; padding-bottom: 50px">
 <div class="row is-flex">
 <div class="col-md-5">
 <h1 class="h3" style=" ">About Adult Redeploy Illinois</h1>
            <p>ARI was established by the <a href="http://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=096-0761">Crime Reduction Act</a> (Public Act 96-0761) to provide financial incentives to local jurisdictions for programs that allow diversion of non-violent offenders from state prisons by providing community-based services. Grants are provided to counties, groups of counties, and judicial circuits to increase programming in their areas, in exchange for reducing the number of people they send to the Illinois Department of Corrections.</p>

<p>The Crime Reduction Act is based on the premise that crime can be reduced and the costs of the criminal justice system can be controlled by understanding and addressing the reasons *why* people commit crimes. It is also based on the premise that local jurisdictions (judicial circuits or counties) know best what resources are necessary to reduce crime. Rigorous evaluation processes with standardized performance measurements are required to confirm the effectiveness of services in reducing crime. </p>

<p>The ARI program is an example of a national best practice called <strong>"performance incentive funding,"</strong> which other states are adopting in different ways. ARI is based on the successful juvenile model which has been operating since 2004 with positive results. In the first three years of the juvenile Redeploy Illinois program, four pilot sites reduced the number of youth sent to the Department of Juvenile Justice by 51 percent (well above the 25 percent goal), which represents potential youth incarceration cost avoidance to the state of nearly $19 million. </p>

<p>Results expected with Adult Redeploy Illinois include reduced prison overcrowding (based on other states' experiences, with no increase in crime); lowered cost to taxpayers ($24,899 a year for prison vs. less than $200 total for drug school for first offenders or $3,500 on average for drug treatment); an end to the expensive vicious cycle of crime and incarceration. </p>



</div>


<div class="col-md-7">

<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist" >
    <li role="presentation" class="active"><a href="#news" aria-controls="news" role="tab" data-toggle="tab">ARI News</a></li>
    <li role="presentation"><a href="#events" aria-controls="events" role="tab" data-toggle="tab">Upcoming Events</a></li>
    
  </ul>

  <!-- Tab panes -->
  <div class="tab-content" >
    <div role="tabpanel" class="tab-pane active" id="news">
    
      
  



  <article class="list">
          {{ collection:news limit="3" scope="tag" sort="date:desc"}} 
          
            {{ partial:block }}
          
          {{ /collection:news }}
   </article>



    
    
    </div>
    <div role="tabpanel" class="tab-pane" id="events">
    

    
    {{ collection:events sort="event_start: asc" }}

    {{if event_end}}

      {{if event_end | is_future}}
        {{partial:block-event}}
      {{/if}}

     {{else}}
    {{if event_start | is_future}}
      {{partial:block-event}}

     {{/if}}
     {{/if}}

  
          
        {{ /collection:events }}
    
    </div>

  </div>

</div>


</div>



  </div>
  </div>

  </section>

  






