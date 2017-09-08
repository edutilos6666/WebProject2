var sortable = {
    init: function() {
        console.log("init function was called.");
        // default settings
        sortable.config  = {
            $obj: $('table#sortable'),
        }
        // collect all table rows from sortable table
        sortable.tableRows = $('tbody tr', sortable.config.$obj);
        sortable.onReady();
    },
    replaceSpecials: function(str) {
        var regex = new RegExp("ä", "g");
        str = str.replace(regex, "ae");
        regex = new RegExp("Ä", "g");
        str = str.replace(regex, "Ae");
        regex = new RegExp("ö", "g");
        str = str.replace(regex, "oe");
        regex = new RegExp("Ö", "g");
        str = str.replace(regex, "Oe");
        regex = new RegExp("ü", "g");
        str = str.replace(regex, "ue");
        regex = new RegExp("Ü", "g");
        str = str.replace(regex , "Ue");
        regex = new RegExp("ß", "g");
        str = str.replace(regex , "ss");
        return str;
    },
    // call this function if a th is clicked. $this is supposed to be the th element
    execute: function($this, index) {
        console.log("execute function was called.");

        var compByIndex0 = function(r1, r2) {
           var v1 =  $(r1).find("td:nth(0)").text();
           var v2 = $(r2).find("td:nth(0)").text();
           var ret = 0;
           if(sortable.asc) {
              ret =  parseInt(v1) - parseInt(v2) ;
               $this.removeClass("asc desc");
               $this.addClass("desc");
               sortable.asc = false ;
           } else {
               ret = parseInt(v2) - parseInt(v1);
               $this.removeClass("asc desc");
               $this.addClass("asc");
               sortable.asc = true ;
           }
           console.log("ret = ", ret);
           return ret ;
        }

        var parent = this;
        var compByIndex1 = function(r1, r2) {
            var v1 =  $(r1).find("td:nth(1)").text();
            var v2 = $(r2).find("td:nth(1)").text();
            v1 = parent.replaceSpecials(v1);
            v2 = parent.replaceSpecials(v2);
            var ret = 0;
            if(sortable.asc) {
                ret =  parseInt(v1) > parseInt(v2) ?1: -1;
                $this.removeClass("asc desc");
                $this.addClass("desc");
                sortable.asc = false ;
            } else {
                ret = parseInt(v2) > parseInt(v1)?1:-1;
                $this.removeClass("asc desc");
                $this.addClass("asc");
                sortable.asc = true ;
            }
            console.log("ret = ", ret);
            return ret ;
        }


        var compByIndex2 = function(r1, r2) {
            var v1 =  $(r1).find("td:nth(2)").text();
            var v2 = $(r2).find("td:nth(2)").text();
            v1 = parent.replaceSpecials(v1);
            v2 = parent.replaceSpecials(v2);
            var ret = 0;
            if(sortable.asc) {
                ret =  parseInt(v1) > parseInt(v2) ?1: -1;
                $this.removeClass("asc desc");
                $this.addClass("desc");
                sortable.asc = false ;
            } else {
                ret = parseInt(v2) > parseInt(v1)?1:-1;
                $this.removeClass("asc desc");
                $this.addClass("asc");
                sortable.asc = true ;
            }
            console.log("ret = ", ret);
            return ret ;
        }


        if(index == 0) {
             sortable.tableRows = sortable.tableRows.sort(compByIndex0);
             var ret = "";
             for(var row of sortable.tableRows) {
                 ret += this.constructRow(row) ;
             }
             $("tbody").html(ret);
         } else if(index == 1) {
             sortable.tableRows = sortable.tableRows.sort(compByIndex1);
             var ret = "";
             for(var row of sortable.tableRows) {
                 ret += this.constructRow(row) ;
             }
             $("tbody").html(ret);
         } else if(index == 2) {
            sortable.tableRows = sortable.tableRows.sort(compByIndex2);
            var ret = "";
            for(var row of sortable.tableRows) {
                ret += this.constructRow(row) ;
            }
            $("tbody").html(ret);
        }



    },
    constructRow: function(row) {
        var ret = "";
       // console.log("constructRow = ", row.cells[0].innerHTML);
        ret += "<tr>";
        for(var cell of row.cells) {
            ret += "<td>" +cell.innerHTML+ "</td>";
        }
        ret += "</tr>";
        return ret ;
    },
    onReady: function() {
      sortable.config.$obj.each(function() {
        // alternating styles for even and odd rows
        $('tbody tr:even', sortable.config.$obj).addClass('even');
        // collect table header from sortable table
        var th = $('th', sortable.config.$obj);
        th.each(function(index) {
          sortable.asc = false;
          $(this).click(function() {
            // switch ascending/descending state for clicked table header
            sortable.asc ? sortable.asc = false :sortable.asc = true;
            th.removeClass('desc asc');
            sortable.asc ? $(this).addClass('asc') : $(this).addClass('desc');
            sortable.execute($(this), index);
            $('tbody tr', sortable.config.$obj).removeClass('even');
            $('tbody tr:even', sortable.config.$obj).addClass('even');
          });
        });
      });
    }
}
$(document).ready(sortable.init);
