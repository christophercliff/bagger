(function($){
    
    $.widget('ui.bagger', {
        
        options: {
            disabled: false,
            item: null,
            quantity: 0
        },
        
        _create: function () {
            
            var self = this,
                options = self.options,
                $el = self.element
                ;
            
            $el
                .addClass('bagger')
                .addClass('mode-set')
                ;
            
            $('#baggerTemplate')
                .tmpl()
                .appendTo($el)
                ;
            
            self._events();
            
            if (!options.disabled)
            {
                self.enable();
            }
            
            if (options.quantity > 0)
            {
                self._updateMode('populated');
                self._updateQuantity(options.quantity);
            }
        },
        
        _init: function () {
            
            
            
        },
        
        _destroy: function () {
            
            
            
        },
        
        _block: function () {
            
            var self = this,
                options = self.options,
                $el = self.element
                ;
            
            $el
                .css({
                    opacity: 0.50,
                    cursor: 'wait'
                })
                ;
            
        },
        
        _unblock: function () {
            
            var self = this,
                options = self.options,
                $el = self.element
                ;
            
            $el
                .css({
                    opacity: 1.00,
                    cursor: 'default'
                })
                ;
            
        },
        
        _events: function () {
            
            var self = this,
                options = self.options,
                $el = self.element
                ;
            
            $el.find('.create-item')
                .click(function(e){
                    e.preventDefault();
                    
                    if (!options.itemCreated)
                    {
                        return;
                    }
                    
                    self._block();
                    
                    self._trigger('itemCreated', e, {
                        item: options.item,
                        quantity: 1,
                        callback: function () {
                            
                            self._unblock();
                            
                            self._updateQuantity(1);
                            
                        }
                    }); 
                    
                })
                ;
            
            $el.find('.update-item')
                .click(function(e){
                    e.preventDefault();
                    
                    var quantity = parseInt($(this).parent().attr('id').replace('option-', ''));
                    
                    if (options.quantity === quantity)
                    {
                        self._updateMode('populated');
                        
                        return;
                    }
                    
                    self._updateQuantity(quantity);
                    
                    if (!options.itemUpdated)
                    {
                        return;
                    }
                    
                    self._block();
                    
                    self._trigger('itemUpdated', e, {
                        item: options.item,
                        quantity: quantity,
                        callback: function () {
                            
                            self._unblock();
                            
                        }
                    });
                    
                })
                ;
            
            $el.find('.remove-item')
                .click(function(e){
                    e.preventDefault();
                    
                    self._updateQuantity(0);
                    
                    if (!options.itemRemoved)
                    {
                        return;
                    }
                    
                    self._block();
                    
                    self._trigger('itemRemoved', e, {
                        item: options.item,
                        quantity: 0,
                        callback: function () {
                            
                            self._unblock();
                            
                        }
                    }); 
                    
                })
                ;
            
            $el.find('.mode-to-update')
                .click(function(e){
                    e.preventDefault();
                    
                    self._updateMode('update');
                    
                })
                ;
            
        },
        
        enable: function () {
            
            var self = this,
                options = self.options,
                $el = self.element
                ;
            
            options.disabled = false;
            
            self._updateQuantity(0);
            
        },
        
        disable: function () {
            
            var self = this,
                options = self.options,
                $el = self.element
                ;
            
            options.disabled = true;
            
            self._updateMode('disabled');
            
        },
        
        _updateMode: function (mode) {
            
            var self = this,
                options = self.options,
                $el = self.element
                ;
            
            $el.find('.mode-active')
                .removeClass('mode-active')
                ;
            
            $el.find('#mode-' + mode)
                .addClass('mode-active')
                ;
            
        },
        
        _updateQuantity: function (quantity) {
            
            var self = this,
                options = self.options,
                $el = self.element,
                html = ''
                ;
            
            options.quantity = quantity;
            
            if (quantity > 0)
            {
                $el.find('#mode-update')
                    .css({
                        top: -(quantity - 1)*$el.find('#mode-update a').outerHeight() + 'px'
                    })
                    ;
                
                if (quantity === 1)
                {
                    html = '<span class="value">' + quantity + '</span> Item in Your Cart';
                }
                else
                {
                    html = '<span class="value">' + quantity + '</span> Items in Your Cart';
                }
                
                $el.find('#mode-populated a')
                    .html(html)
                    ;
                
                self._updateMode('populated');
            }
            else
            {
                self._updateMode('empty');
            }
            
        }
        
    });
    
})(jQuery);