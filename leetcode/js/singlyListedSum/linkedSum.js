function ListNode(val) {
      this.val = val;
      this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0);
    var head1 = l1, head2 = l2, current = dummyHead;
    var carry = 0;

    while (head1 !== null || head2 !== null) {
      var val1 = (head1 != null) ? head1.val : 0;
      var val2 = (head2 != null) ? head2.val : 0;
      var sum = carry + val1 + val2;

      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;

      if(head1 !== null) head1 = head1.next;
      if(head2 !== null) head2 = head2.next;
    }

    if(carry > 0) {
      current.next = new ListNode(carry);
    }

    return  dummyHead.next;
};

/// testing
var result = "";
var node1 = new ListNode(2);
node1.next = new ListNode(4);
node1.next.next = new ListNode(3)

var node2 = new ListNode(5);
node2.next = new ListNode(6);
node2.next.next = new ListNode(4);

var head = addTwoNumbers(node1, node2);

while(head !== null) {
  if(head.next == null) {
    result += head.val;
  } else {
    result += head.val + "->";
  }
  head = head.next;
}

console.log(result);
