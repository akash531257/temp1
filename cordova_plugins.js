


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>phonegap-facebook-plugin/cordova_plugins.js at master · Wizcorp/phonegap-facebook-plugin</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Wizcorp/phonegap-facebook-plugin" name="twitter:title" /><meta content="phonegap-facebook-plugin - The official plugin for Facebook in Apache Cordova/PhoneGap" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/592346?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/592346?v=3&amp;s=400" property="og:image" /><meta content="Wizcorp/phonegap-facebook-plugin" property="og:title" /><meta content="https://github.com/Wizcorp/phonegap-facebook-plugin" property="og:url" /><meta content="phonegap-facebook-plugin - The official plugin for Facebook in Apache Cordova/PhoneGap" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/Nzg0OTI2OmI0ODAwMGI5MmMyMWU4NzNkN2QyN2JmMTJmZmMwNTg5Ojk5MDFjN2U3MGU5MjBjN2M1YmY4NDgxMDNjZDU5ZDFmYzU4Yjk1NjA1Y2I3NTc1YTFiODc2YmY1NThiZTYxZTE=--a0c34573ca6118a89469b2696af4473d53731312">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="8348A3F6:3924:6ECE578:55744205" name="octolytics-dimension-request_id" /><meta content="784926" name="octolytics-actor-id" /><meta content="gustavocsouza" name="octolytics-actor-login" /><meta content="f8e62eb4e23b90ed492e81a4e4416705013d767aaa60877ccc402da5c67572dd" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
      <meta name="hostname" content="github.com">
    <meta name="user-login" content="gustavocsouza">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="pYrkrOT8oIZH+3NQOwZAgAg5DXw9IMGI1bDzldm26qZGnwcVSmHXOVaXFzOFVqDzwwWSz87VLL2al5dxhGZ5yA==" name="csrf-token" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-6967b378b26829cc5a2ea2ad4209ff0af50f2a65057962219dc9dcf8942683f0.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-73bfe123ff406f4bf8959a28667410beaac1485e71c92d4725a3d7afc45fc4c5.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="30cf7eb6838f7e628d093c8366abfa24">

      
  <meta name="description" content="phonegap-facebook-plugin - The official plugin for Facebook in Apache Cordova/PhoneGap">
  <meta name="go-import" content="github.com/Wizcorp/phonegap-facebook-plugin git https://github.com/Wizcorp/phonegap-facebook-plugin.git">

  <meta content="592346" name="octolytics-dimension-user_id" /><meta content="Wizcorp" name="octolytics-dimension-user_login" /><meta content="1824050" name="octolytics-dimension-repository_id" /><meta content="Wizcorp/phonegap-facebook-plugin" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1824050" name="octolytics-dimension-repository_network_root_id" /><meta content="Wizcorp/phonegap-facebook-plugin" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Wizcorp/phonegap-facebook-plugin/commits/master.atom" rel="alternate" title="Recent Commits to phonegap-facebook-plugin:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/Wizcorp/phonegap-facebook-plugin/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/Wizcorp/phonegap-facebook-plugin/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item explore">
            <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
          </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
            </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          </li>
      </ul>

      
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/gustavocsouza" data-ga-click="Header, go to profile, text:username">
      <img alt="@gustavocsouza" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/784926?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">gustavocsouza</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="/new" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu">
        
<li>
  <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
</li>
<li>
  <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
</li>


  <li class="dropdown-divider"></li>
  <li class="dropdown-header">
    <span title="Wizcorp/phonegap-facebook-plugin">This repository</span>
  </li>
    <li>
      <a href="/Wizcorp/phonegap-facebook-plugin/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>

      </ul>
    </div>
  </li>

  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:gustavocsouza"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BM8OHeQIjiF+e8px0kVie1ZgA09m1yrB7qE1ei0pdCFALvBwz0GvOrhYny07Kt2YLFI6+HNuzvItiDlAI++Z0w==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">

        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SRqoKvVYD06It2Jh4ywCRP65OJkMxby0ooHEm9BkT/gj1ELXvgp/4hJc3etfVwAf+F5fOc471A8cLDehzMk17Q==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="1824050" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/Wizcorp/phonegap-facebook-plugin/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/Wizcorp/phonegap-facebook-plugin/watchers">
          118
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/Wizcorp/phonegap-facebook-plugin/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RjqlbEhB7/83zGBCPECR4WDczo7KEw0vN3QlrADW4p2V2bHgytsR/G3YAjbJ1PLqIffXaskiRQDpbuQFD6ZFxA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Wizcorp/phonegap-facebook-plugin"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Wizcorp/phonegap-facebook-plugin/stargazers">
          1,562
        </a>
</form>
    <form accept-charset="UTF-8" action="/Wizcorp/phonegap-facebook-plugin/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nUlAvox7fsXb/+TOU2u3nJd50SnDKlYUCDl/XAQsgNGsg2DFtlykI5c9bvDaGkkj+7brTY0YRJ+jcMWOvuRJXg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Wizcorp/phonegap-facebook-plugin"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/Wizcorp/phonegap-facebook-plugin/stargazers">
          1,562
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/Wizcorp/phonegap-facebook-plugin/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IePZfyu8QIMyMXNWPn8XiU1nCHTMZz+zrd/bbjBuX42j6Ohif9OuyuEu2uEj7U808jUH2kCz479+EDlTlYCF4A==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of Wizcorp/phonegap-facebook-plugin to your account"
                aria-label="Fork your own copy of Wizcorp/phonegap-facebook-plugin to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/Wizcorp/phonegap-facebook-plugin/network" class="social-count">1,157</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/Wizcorp" class="url fn" itemprop="url" rel="author"><span itemprop="title">Wizcorp</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/Wizcorp/phonegap-facebook-plugin" data-pjax="#js-repo-pjax-container">phonegap-facebook-plugin</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/Wizcorp/phonegap-facebook-plugin/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/Wizcorp/phonegap-facebook-plugin" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Wizcorp/phonegap-facebook-plugin">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/Wizcorp/phonegap-facebook-plugin/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Wizcorp/phonegap-facebook-plugin/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/Wizcorp/phonegap-facebook-plugin/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /Wizcorp/phonegap-facebook-plugin/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/Wizcorp/phonegap-facebook-plugin/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /Wizcorp/phonegap-facebook-plugin/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/Wizcorp/phonegap-facebook-plugin/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /Wizcorp/phonegap-facebook-plugin/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/Wizcorp/phonegap-facebook-plugin.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:Wizcorp/phonegap-facebook-plugin.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/Wizcorp/phonegap-facebook-plugin" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0ss+UT2+4Cf3WFSYv/Hu1Sejww1BXwjvFfkbFnjKU8w8bQGrvzOWWJOYAgwZjAmPH+r6QacbqIgr4euorDQUsw==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="WZwh+0UAcmgNf6ENfxrq9sWO31ML6wlxalwqBiCw0BTsr+igXVbyfJylzp7b50Dd+F1v7xGzDiYl9pYWMybY+Q==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="URDf0eMWHpmdeJ1/FPnGkC8xXqtHSWuoC1IzUgiTwQJvUf54QZ4vJYpNZkFuRHBLNY/n8yc4w+zwkLbqspvKFw==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>

  <a href="github-mac://openRepo/https://github.com/Wizcorp/phonegap-facebook-plugin" class="btn btn-sm sidebar-button" title="Save Wizcorp/phonegap-facebook-plugin to your computer and use it in GitHub Desktop." aria-label="Save Wizcorp/phonegap-facebook-plugin to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>



                <a href="/Wizcorp/phonegap-facebook-plugin/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of Wizcorp/phonegap-facebook-plugin as a zip file"
                   title="Download the contents of Wizcorp/phonegap-facebook-plugin as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/Wizcorp/phonegap-facebook-plugin/blob/3d52b1eb8a55ebcf8ad10c75d99deedeca0c0fdd/platforms/browser/www/cordova_plugins.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ee234dc6aee4cc153867c4ffc9446a69 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Wizcorp/phonegap-facebook-plugin/blob/cordova2.8FB3.5/platforms/browser/www/cordova_plugins.js"
               data-name="cordova2.8FB3.5"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cordova2.8FB3.5">
                cordova2.8FB3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Wizcorp/phonegap-facebook-plugin/blob/cordova3.0FBiOS3.8FBAndroid3.5/platforms/browser/www/cordova_plugins.js"
               data-name="cordova3.0FBiOS3.8FBAndroid3.5"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="cordova3.0FBiOS3.8FBAndroid3.5">
                cordova3.0FBiOS3.8FBAndroid3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Wizcorp/phonegap-facebook-plugin/blob/develop/platforms/browser/www/cordova_plugins.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Wizcorp/phonegap-facebook-plugin/blob/master/platforms/browser/www/cordova_plugins.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Wizcorp/phonegap-facebook-plugin/blob/master-for-npm/platforms/browser/www/cordova_plugins.js"
               data-name="master-for-npm"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master-for-npm">
                master-for-npm
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Wizcorp/phonegap-facebook-plugin/blob/plugman/platforms/browser/www/cordova_plugins.js"
               data-name="plugman"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="plugman">
                plugman
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Wizcorp/phonegap-facebook-plugin/blob/plugman-FB-SDK-3.2.1/platforms/browser/www/cordova_plugins.js"
               data-name="plugman-FB-SDK-3.2.1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="plugman-FB-SDK-3.2.1">
                plugman-FB-SDK-3.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Wizcorp/phonegap-facebook-plugin/blob/revert-713-master/platforms/browser/www/cordova_plugins.js"
               data-name="revert-713-master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="revert-713-master">
                revert-713-master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/v0.11.0/platforms/browser/www/cordova_plugins.js"
                 data-name="v0.11.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.11.0">v0.11.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/1.4.1support/platforms/browser/www/cordova_plugins.js"
                 data-name="1.4.1support"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.1support">1.4.1support</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.10.1/platforms/browser/www/cordova_plugins.js"
                 data-name="0.10.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.10.1">0.10.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.10.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.10.0">0.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.9.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.9.0">0.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.8.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.8.0">0.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.7.1/platforms/browser/www/cordova_plugins.js"
                 data-name="0.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.1">0.7.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.7.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.0">0.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.6.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.6.0">0.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.4.2/platforms/browser/www/cordova_plugins.js"
                 data-name="0.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.2">0.4.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.4.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.0">0.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.3.1/platforms/browser/www/cordova_plugins.js"
                 data-name="0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.1">0.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.3.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.2.4/platforms/browser/www/cordova_plugins.js"
                 data-name="0.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.4">0.2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.2.3/platforms/browser/www/cordova_plugins.js"
                 data-name="0.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.3">0.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.2.2/platforms/browser/www/cordova_plugins.js"
                 data-name="0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.2">0.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.2.1/platforms/browser/www/cordova_plugins.js"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.2.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.1.1/platforms/browser/www/cordova_plugins.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Wizcorp/phonegap-facebook-plugin/tree/0.1.0/platforms/browser/www/cordova_plugins.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/Wizcorp/phonegap-facebook-plugin/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Wizcorp/phonegap-facebook-plugin" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">phonegap-facebook-plugin</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Wizcorp/phonegap-facebook-plugin/tree/master/platforms" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">platforms</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Wizcorp/phonegap-facebook-plugin/tree/master/platforms/browser" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">browser</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Wizcorp/phonegap-facebook-plugin/tree/master/platforms/browser/www" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator">/</span><strong class="final-path">cordova_plugins.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@aogilvie" class="avatar" data-user="970364" height="24" src="https://avatars0.githubusercontent.com/u/970364?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/aogilvie" rel="contributor">aogilvie</a></span>
        <time datetime="2014-12-11T04:43:48Z" is="relative-time">Dec 11, 2014</time>
        <div class="commit-title">
            <a href="/Wizcorp/phonegap-facebook-plugin/commit/bafe61029f37e14f1c382aad5f48107f20d323a2" class="message" data-pjax="true" title="added browser platform compatibility and sample app">added browser platform compatibility and sample app</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@aogilvie" data-user="970364" height="24" src="https://avatars0.githubusercontent.com/u/970364?v=3&amp;s=48" width="24" />
            <a href="/aogilvie">aogilvie</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/Wizcorp/phonegap-facebook-plugin/raw/master/platforms/browser/www/cordova_plugins.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/Wizcorp/phonegap-facebook-plugin/blame/master/platforms/browser/www/cordova_plugins.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/Wizcorp/phonegap-facebook-plugin/commits/master/platforms/browser/www/cordova_plugins.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-mac://openRepo/https://github.com/Wizcorp/phonegap-facebook-plugin?branch=master&amp;filepath=platforms%2Fbrowser%2Fwww%2Fcordova_plugins.js"
           aria-label="Open this file in GitHub for Mac"
           data-ga-click="Repository, open with desktop, type:mac">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/Wizcorp/phonegap-facebook-plugin/edit/master/platforms/browser/www/cordova_plugins.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Ah1sGFIZ2zywXrIxCVuuDcoMDW4j+XGyjCJ2XVw66d9jov6uelzlctowjm6kptn81KHy60m9dtc8P9sE4ptM/Q==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/Wizcorp/phonegap-facebook-plugin/delete/master/platforms/browser/www/cordova_plugins.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="V46GMU6du8jrDEAH+pLj1/1Vj+nUfUxZqgrfFtg6IshkMcspznjjJ9uvEgMBdF5/aRtERtz9h4QpbNdgYjLbSw==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        17 lines (17 sloc)
        <span class="file-info-divider"></span>
      0.469 kB
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">cordova.define(<span class="pl-s"><span class="pl-pds">&#39;</span>cordova/plugin_list<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">require</span>, <span class="pl-smi">exports</span>, <span class="pl-smi">module</span>) {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.exports <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>file<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>phonegap/plugin/facebookConnectPlugin/facebookConnectPlugin.js<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>com.phonegap.plugins.facebookconnect.FacebookConnectPlugin<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>clobbers<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>window.facebookConnectPlugin<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">        ]</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">];</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.exports.metadata <span class="pl-k">=</span> </td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// TOP OF METADATA</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">{</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>com.phonegap.plugins.facebookconnect<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>0.5.1<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// BOTTOM OF METADATA</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.06454s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-447ce66a36506ebddc8e84b4e32a77f6062f3d3482e77dd21a77a01f0643ad98.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-a5f1d0adc0be764520503e28eb75f4f8ede92312238a209f2531bd3a79b28cb7.js"></script>
      
      
  </body>
</html>
