Bagger
===========

An "add to bag" JavaScript control.


Description
--------------

Bagger is a jQuery plugin that replaces a typical ecommerce UI:

    <form>
        <label>Quantity</label>
        <select>
            <option>1</value>
            <option>2</value>
            <!-- etc... -->
        </select>
        <input type="submit" value="Add Item" />
    </form>


Requirements
-------------

- jQuery 1.4.2
- jQuery UI 1.8.5


Recommended (optional, required to run the demos)
-------------

- jQuery Templates plugin
- YUI reset.css
- YUI fonts.css


Usage
----------------

The HTML:

    <div class="mybagger"></div>

The jQuery template:

    <script id="baggerTemplate" type="text/x-jquery-tmpl">    
        
        <div class="mode mode-active" id="mode-disabled">
            <span>Add Item</span>
            <span>(Select a size first)</span>
        </div>
        <div class="mode" id="mode-empty">
            <a class="create-item" href="#" title="Add">Add Item</a>
        </div>
        <div class="mode" id="mode-populated">
            <a class="mode-to-update" href="#" title="Update Item"><span class="value">1</span> Item in Your Cart</a>
        </div>
        <div class="mode" id="mode-update">
            <ul class="option-set">
                <li class="option option-selected" id="option-1">
                    <a class="option-a update-item" href="#" title="1">1</a>
                </li>
                <li class="option" id="option-2">
                    <a class="option-a update-item" href="#" title="2">2</a>
                </li>
                <li class="option" id="option-3">
                    <a class="option-a update-item" href="#" title="3">3</a>
                </li>
                <li class="option" id="option-4">
                    <a class="option-a update-item" href="#" title="4">4</a>
                </li>
                <li class="option" id="option-5">
                    <a class="option-a update-item" href="#" title="5">5</a>
                </li>
                <li class="option" id="option-6">
                    <a class="option-a update-item" href="#" title="6">6</a>
                </li>
                <li class="option" id="option-7">
                    <a class="option-a update-item" href="#" title="7">7</a>
                </li>
                <li class="option" id="option-8">
                    <a class="option-a update-item" href="#" title="8">8</a>
                </li>
            </ul>
            <a class="remove-item" href="#" title="Remove Item">Remove Item</a>
        </div>
        
    </script>

The CSS:

    .mode-set {
        position: relative;
        width: 250px;
    }
    .mode-set a {
        text-decoration: none;
    }
        .mode {
            display: none;
        }
        .mode-active {
            display: block;
        }
        #mode-disabled {
            opacity: 0.50;
            padding: 11px 15px 10px;
            color: #444;
            background: -moz-linear-gradient(center top , #FBFBFB, #F4F4F4) repeat scroll 0 0 transparent;
            background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#FBFBFB), to(#F4F4F4));
            border-style: solid;
            border-width: 0 0;
            border-color: #F0F0F0 #E2E2E2 #E4E4E4 #F0F0F0;
            font-size: 85%; line-height: 11px;
            -moz-border-radius: 6px;
            -webkit-border-bottom-left-radius: 6px;
            -webkit-border-top-left-radius: 6px;
            -webkit-border-bottom-right-radius: 6px;
            -webkit-border-top-right-radius: 6px;
            -moz-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
            -webkit-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
        }
        #mode-empty {
            
        }
            #mode-empty .create-item {
                display: block;
                padding: 11px 15px 10px;
                color: #444;
                background: -moz-linear-gradient(center top , #FBFBFB, #F4F4F4) repeat scroll 0 0 transparent;
                background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#FBFBFB), to(#F4F4F4));
                border-style: solid;
                border-width: 0 0;
                border-color: #F0F0F0 #E2E2E2 #E4E4E4 #F0F0F0;
                font-size: 85%; line-height: 11px;
                -moz-border-radius: 6px;
                -webkit-border-bottom-left-radius: 6px;
                -webkit-border-top-left-radius: 6px;
                -webkit-border-bottom-right-radius: 6px;
                -webkit-border-top-right-radius: 6px;
                -moz-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
                -webkit-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
            }
        #mode-populated {
            background: -moz-linear-gradient(center top, #3b3b3b, #2c2c2c) repeat scroll 0 0 transparent;
            background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#3b3b3b), to(#2c2c2c));
            border-style: solid;
            border-width: 0 0;
            border-color: #111 #020202 #000 #111;
            -moz-border-radius: 6px;
            -webkit-border-bottom-left-radius: 6px;
            -webkit-border-top-left-radius: 6px;
            -webkit-border-bottom-right-radius: 6px;
            -webkit-border-top-right-radius: 6px;
            -moz-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
            -webkit-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
        }
            #mode-populated .mode-to-update {
                display: block;
                padding: 11px 30px 10px 15px;
                color: #ddd;
                font-size: 85%; line-height: 11px; text-shadow: 1px 1px 0 #161616;
                -moz-border-radius: 6px;
                -webkit-border-bottom-left-radius: 6px;
                -webkit-border-top-left-radius: 6px;
                -webkit-border-bottom-right-radius: 6px;
                -webkit-border-top-right-radius: 6px;
                -moz-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
                -webkit-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
                background: url('/content/images/updown.png') 235px 10px no-repeat;
            }
            #mode-populated .value {
                display: block; float: left;
                padding: 0 15px; margin-right: 8px;
                color: #ddd;
                background: -moz-linear-gradient(center top, #4b4b4b, #3c3c3c) repeat scroll 0 0 transparent;
                background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#4b4b4b), to(#3c3c3c));
                border-style: solid;
                border-width: 0 0;
                border-color: #111 #020202 #000 #111;
                font-size: 85%; line-height: 11px; text-shadow: 1px 1px 0 #161616;
                -moz-border-radius: 6px;
                -webkit-border-bottom-left-radius: 6px;
                -webkit-border-top-left-radius: 6px;
                -webkit-border-bottom-right-radius: 6px;
                -webkit-border-top-right-radius: 6px;
                -moz-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
                -webkit-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
            }
        #mode-update {
            position: absolute; left: 0; top: 0;
            width: 100%;
            background: -moz-linear-gradient(center top, #3b3b3b, #2c2c2c) repeat scroll 0 0 transparent;
            background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#3b3b3b), to(#2c2c2c));
            border-style: solid;
            border-width: 0 0;
            border-color: #111 #020202 #000 #111;
            -moz-border-radius: 6px;
            -webkit-border-bottom-left-radius: 6px;
            -webkit-border-top-left-radius: 6px;
            -webkit-border-bottom-right-radius: 6px;
            -webkit-border-top-right-radius: 6px;
            -moz-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
            -webkit-box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.10);
        }
            #mode-update .option-set {
                
            }
                #mode-update .option {
                    display: inline;
                }
                    #mode-update .option-a {
                        display: block;
                        padding: 11px 15px 10px;
                        color: #ddd;
                        font-size: 85%; line-height: 11px; text-shadow: 1px 1px 0 #161616;
                        -moz-border-radius: 6px;
                    }
                    #mode-update .option-a:hover {
                        background-color: #4b4b4b;
                    }
                    #mode-update .option-selected .option-a {
                        
                    }
            #mode-update .remove-item {
                display: block;
                padding: 11px 15px 10px;
                color: #ddd;
                font-size: 85%; line-height: 11px; text-shadow: 1px 1px 0 #161616;
            }
            #mode-update .remove-item:hover {
                background-color: #4b4b4b;
                -moz-border-radius: 6px;
                -webkit-border-bottom-left-radius: 6px;
                -webkit-border-top-left-radius: 6px;
                -webkit-border-bottom-right-radius: 6px;
                -webkit-border-top-right-radius: 6px;
            }

The JavaScript:

    $('.mybagger')
        .bagger({
            itemCreated: function (e, o) {
                
                o.callback();
                
            },
            itemUpdated: function (e, o) {
                
                o.callback();
                
            },
            itemRemoved: function (e, o) {
                
                o.callback();
                
            }
        })
        ;