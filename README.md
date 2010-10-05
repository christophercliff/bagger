Bagger
===========

An "add to bag" JavaScript control using jQuery UI.


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

    <link rel="stylesheet" type="text/css" href="../bagger.css">

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